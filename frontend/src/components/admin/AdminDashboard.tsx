import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, DollarSign, Users, Plus } from "lucide-react";

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin/login");
    }
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
              <div className="text-2xl font-bold text-gray-800">12</div>
              <p className="text-emerald-500 text-sm">
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
              <div className="text-2xl font-bold text-gray-800">8</div>
              <p className="text-emerald-500 text-sm">
                Kelola <span className="ml-1">→</span>
              </p>
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
              <div className="text-2xl font-bold text-gray-800">25</div>
              <p className="text-emerald-500 text-sm">
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
              <div className="text-2xl font-bold text-gray-800">1,234</div>
              <p className="text-emerald-500 text-sm">+12% bulan ini</p>
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
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Kontribusi Al-Khawarizmi
                    </h3>
                    <p className="text-sm text-gray-500">25 Juli 2024, 19:30</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Ibn Sina dan Kedokteran
                    </h3>
                    <p className="text-sm text-gray-500">
                      1 Agustus 2024, 19:30
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Keuangan Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Donasi Pembangunan
                    </h3>
                    <p className="text-sm text-gray-500">15 Juli 2024</p>
                  </div>
                  <span className="text-green-600 font-semibold">
                    +Rp 5.000.000
                  </span>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Biaya Listrik
                    </h3>
                    <p className="text-sm text-gray-500">14 Juli 2024</p>
                  </div>
                  <span className="text-red-600 font-semibold">
                    -Rp 800.000
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
