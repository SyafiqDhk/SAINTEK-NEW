import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, DollarSign } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CashflowItem {
  id: number;
  date: string;
  type: "income" | "expense";
  amount: number;
  description: string;
}

const AdminCashflow = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cashflows, setCashflows] = useState<CashflowItem[]>([
    {
      id: 1,
      date: "2024-07-15",
      type: "income",
      amount: 5000000,
      description: "Donasi dari jamaah untuk pembangunan masjid",
    },
    {
      id: 2,
      date: "2024-07-14",
      type: "expense",
      amount: 800000,
      description: "Biaya listrik dan air bulan Juli",
    },
    {
      id: 3,
      date: "2024-07-12",
      type: "income",
      amount: 2500000,
      description: "Infaq Jumat",
    },
    {
      id: 4,
      date: "2024-07-10",
      type: "expense",
      amount: 1200000,
      description: "Pembelian perlengkapan kajian",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CashflowItem | null>(null);
  const [formData, setFormData] = useState({
    date: "",
    type: "income" as "income" | "expense",
    amount: "",
    description: "",
  });

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [isAdmin, navigate]);

  const totalIncome = cashflows
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = cashflows
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = totalIncome - totalExpense;

  const resetForm = () => {
    setFormData({
      date: "",
      type: "income",
      amount: "",
      description: "",
    });
    setEditingItem(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseFloat(formData.amount);

    if (editingItem) {
      // Update existing item
      setCashflows(
        cashflows.map((item) =>
          item.id === editingItem.id ? { ...item, ...formData, amount } : item
        )
      );
      toast({
        title: "Data berhasil diperbarui",
        description: "Transaksi keuangan telah disimpan",
      });
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        ...formData,
        amount,
      };
      setCashflows([...cashflows, newItem]);
      toast({
        title: "Data berhasil ditambahkan",
        description: "Transaksi keuangan baru telah dibuat",
      });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (item: CashflowItem) => {
    setEditingItem(item);
    setFormData({
      date: item.date,
      type: item.type,
      amount: item.amount.toString(),
      description: item.description,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setCashflows(cashflows.filter((item) => item.id !== id));
    toast({
      title: "Data berhasil dihapus",
      description: "Transaksi keuangan telah dihapus dari sistem",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Kelola Keuangan
            </h1>
            <p className="text-gray-600">
              Tambah, edit, atau hapus transaksi keuangan
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={resetForm}
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah Transaksi
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingItem ? "Edit Transaksi" : "Tambah Transaksi Baru"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="date">Tanggal</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="type">Tipe Transaksi</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: "income" | "expense") =>
                      setFormData({ ...formData, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih tipe transaksi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Pemasukan</SelectItem>
                      <SelectItem value="expense">Pengeluaran</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Jumlah (Rp)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                    placeholder="0"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Deskripsi</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Masukkan deskripsi transaksi"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Batal
                  </Button>
                  <Button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    {editingItem ? "Perbarui" : "Simpan"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600">
                Total Pemasukan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(totalIncome)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-600">
                Total Pengeluaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {formatCurrency(totalExpense)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-emerald-600">
                Saldo Saat Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  balance >= 0 ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {formatCurrency(balance)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cashflow List */}
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Transaksi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cashflows.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge
                        variant={
                          item.type === "income" ? "default" : "destructive"
                        }
                      >
                        {item.type === "income" ? "Pemasukan" : "Pengeluaran"}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <p className="text-gray-800">{item.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`text-lg font-semibold ${
                        item.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.type === "income" ? "+" : "-"}
                      {formatCurrency(item.amount)}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {cashflows.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Belum Ada Transaksi
              </h3>
              <p className="text-gray-600 mb-4">
                Mulai tambahkan catatan keuangan masjid
              </p>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setIsDialogOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah Transaksi Pertama
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminCashflow;
