import { Calendar, BookOpen, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Masjid Al-Mahally
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Pusat Kajian Sains dan Teknologi dalam Perspektif Islam
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-emerald-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
                Lihat Jadwal Kajian
              </button>
              <button className="border-2 border-white text-white hover:bg-emerald-600 font-medium py-3 px-6 rounded-lg transition duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-emerald-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-l-4 border-emerald-500">
            <CardContent className="p-8 text-center">
              <h2 className="text-sm uppercase tracking-wider text-emerald-600 mb-4 font-semibold">
                Quote Harian
              </h2>
              <p className="text-xl italic mb-4 text-gray-800">
                "Dan sungguh, Kami telah memuliakan anak cucu Adam, dan Kami
                angkut mereka di darat dan di laut, dan Kami beri mereka rezeki
                dari yang baik-baik dan Kami lebihkan mereka di atas banyak
                makhluk yang Kami ciptakan dengan kelebihan yang sempurna."
              </p>
              <div className="text-gray-600">
                <span className="font-semibold">Al-Quran</span>
                <span className="text-gray-500"> (QS. Al-Isra: 70)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Layanan Masjid
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan dan fasilitas yang tersedia untuk jamaah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Jadwal Kajian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Kajian rutin yang membahas integrasi sains dan teknologi dalam
                  perspektif Islam
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Artikel Edukasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Artikel-artikel edukatif tentang kontribusi Islam dalam
                  perkembangan sains
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Transparansi Keuangan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Laporan keuangan masjid yang transparan untuk jamaah
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Komunitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bergabung dengan komunitas yang menjembatani ilmu dan agama
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tentang Masjid Al-Mahally
              </h2>
              <div className="h-1 w-20 bg-emerald-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Masjid Al-Mahally adalah pusat kajian Islam yang memfokuskan
                pada integrasi sains dan teknologi dalam perspektif Islam. Kami
                berkomitmen untuk mengedukasi masyarakat tentang kontribusi
                Islam dalam perkembangan sains dan teknologi serta relevansinya
                dengan kehidupan modern.
              </p>
              <p className="text-gray-600 mb-6">
                Melalui berbagai kajian, artikel, dan kegiatan, kami berupaya
                menghidupkan kembali semangat ilmiah yang telah diwariskan oleh
                para ilmuwan Muslim sepanjang sejarah.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1564769662461-7a8b2e67ce10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Masjid"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah Dengan Komunitas Kami
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Jadilah bagian dari komunitas yang menjembatani ilmu pengetahuan
            modern dengan nilai-nilai Islam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-300">
              Lihat Jadwal Kajian
            </button>
            <button className="border-2 border-white text-white hover:bg-emerald-600 font-medium py-3 px-6 rounded-lg transition duration-300">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
