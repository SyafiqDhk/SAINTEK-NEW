import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, DollarSign, Users, Plus } from "lucide-react";

interface Lecture {
  id: number;
  title: string;
  speaker: string;
  date: string;
}

interface Cashflow {
  id: number;
  title: string;
  amount: number;
  type: string;
  date: string;
}

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [cashflows, setCashflows] = useState<Cashflow[]>([]);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin/login");
      return;
    }

    const fetchData = async () => {
      const lecturesRes = await api.get("/lectures");
      setLectures(lecturesRes.data);

      const cashflowsRes = await api.get("/cashflows");
      setCashflows(cashflowsRes.data);
    };

    fetchData();
  }, [isAdmin, navigate]);

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Selamat datang! Kelola semua konten masjid dari dashboard ini.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total Kajian
                </CardTitle>
                <Calendar className="h-5 w-5 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">
                {lectures.length}
              </div>
              <p
                className="text-emerald-500 text-sm cursor-pointer"
                onClick={() => navigate("/admin/lectures")}
              >
                Kelola <span className="ml-1">→</span>
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total Artikel
                </CardTitle>
                <BookOpen className="h-5 w-5 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">0</div>
              <p className="text-gray-400 text-sm">Belum tersedia</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Transaksi Keuangan
                </CardTitle>
                <DollarSign className="h-5 w-5 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">
                {cashflows.length}
              </div>
              <p
                className="text-emerald-500 text-sm cursor-pointer"
                onClick={() => navigate("/admin/cashflow")}
              >
                Kelola <span className="ml-1">→</span>
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Pengunjung Website
                </CardTitle>
                <Users className="h-5 w-5 text-emerald-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">0</div>
              <p className="text-gray-400 text-sm">Belum tersedia</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                className="flex items-center justify-center py-6 bg-emerald-600 hover:bg-emerald-700"
                onClick={() => navigate("/admin/lectures")}
              >
                <Plus className="w-5 h-5 mr-2" />
                Kelola Kajian
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center py-6"
                onClick={() => navigate("/admin/cashflow")}
              >
                <Plus className="w-5 h-5 mr-2" />
                Kelola Keuangan
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center py-6 border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Plus className="w-5 h-5 mr-2" />
                Pengaturan Masjid
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Kajian Mendatang</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lectures.slice(0, 5).map((lecture) => (
                  <div
                    key={lecture.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {lecture.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(lecture.date).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate("/admin/lectures")}
                    >
                      Kelola
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Keuangan Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cashflows.slice(0, 5).map((cf) => (
                  <div
                    key={cf.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {cf.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(cf.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={
                        cf.type === "income"
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {cf.type === "income" ? "+" : "-"}Rp{" "}
                      {cf.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
