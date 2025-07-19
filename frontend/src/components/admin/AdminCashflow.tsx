// src/components/admin/AdminCashflow.tsx

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Cashflow {
  id: number;
  title: string;
  amount: number;
  type: string;
  date: string;
}

const AdminCashflow = () => {
  const [cashflows, setCashflows] = useState<Cashflow[]>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const { toast } = useToast();

  const fetchCashflows = async () => {
    const res = await api.get("/cashflows");
    setCashflows(res.data);
  };

  useEffect(() => {
    fetchCashflows();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/cashflows", {
        title,
        amount: Number(amount),
        type,
        date,
      });
      toast({ title: "Berhasil menambahkan transaksi" });
      setTitle("");
      setAmount("");
      setType("");
      setDate("");
      fetchCashflows();
    } catch (error) {
      toast({ title: "Gagal menambahkan transaksi", variant: "destructive" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Tambah Transaksi</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Judul Transaksi</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label>Jumlah</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                required
              />
            </div>
            <div>
              <Label>Jenis Transaksi</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jenis transaksi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Pemasukan</SelectItem>
                  <SelectItem value="expense">Pengeluaran</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Tanggal</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Simpan Transaksi
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-4">
        {cashflows.map((cashflow) => (
          <Card key={cashflow.id}>
            <CardHeader>
              <CardTitle>{cashflow.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Jumlah: Rp {cashflow.amount.toLocaleString()}</p>
              <p className="text-gray-700">Jenis: {cashflow.type === "income" ? "Pemasukan" : "Pengeluaran"}</p>
              <p className="text-gray-700">Tanggal: {new Date(cashflow.date).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminCashflow;
