import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CashflowItem {
  id: number;
  date: string;
  type: "income" | "expense";
  amount: number;
  description: string;
}

const CashflowPage = () => {
  const [cashflows] = useState<CashflowItem[]>([
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
    {
      id: 5,
      date: "2024-07-08",
      type: "income",
      amount: 3000000,
      description: "Donasi untuk program kajian sains Islam",
    },
  ]);

  const totalIncome = cashflows
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = cashflows
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = totalIncome - totalExpense;

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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Laporan Keuangan
          </h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Transparansi pengelolaan keuangan masjid untuk kepercayaan jamaah.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                    <div className="flex items-center space-x-2 mb-1">
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
                  <div
                    className={`text-lg font-semibold ${
                      item.type === "income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.type === "income" ? "+" : "-"}
                    {formatCurrency(item.amount)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Info Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Informasi Donasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Rekening Bank
                </h3>
                <p className="text-gray-600">Bank Mandiri: 1234567890</p>
                <p className="text-gray-600">a.n. Masjid Al-Mahally</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">QRIS</h3>
                <p className="text-gray-600">
                  Scan QR Code yang tersedia di masjid untuk donasi digital
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CashflowPage;
