import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
            atau ingin berpartisipasi dalam kegiatan kami.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Informasi Kontak
              </h2>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-emerald-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Alamat
                      </h3>
                      <p className="text-gray-600">
                        Jl. Raya Ngaban No.28, Ngaban, Kec. Tanggulangin,
                        Kabupaten Sidoarjo, Jawa Timur 61272
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-emerald-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Telepon
                      </h3>
                      <p className="text-gray-600">+62 877 5044 1880</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-emerald-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Email
                      </h3>
                      <p className="text-gray-600">info@masjidalmahally.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Media Sosial</h2>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="bg-blue-400 hover:bg-blue-500">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="bg-pink-600 hover:bg-pink-700">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="bg-red-600 hover:bg-red-700">
                    <Youtube className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Lokasi</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="aspect-video h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Google Maps Embed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Kirim Pesan</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <Input type="text" placeholder="Masukkan nama lengkap" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="Masukkan email" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Subjek
                    </label>
                    <Input type="text" placeholder="Masukkan subjek" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Pesan
                    </label>
                    <Textarea rows={5} placeholder="Tulis pesan Anda..." />
                  </div>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                    <Mail className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-800">FAQ</h2>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Bagaimana cara mengikuti kajian?
                      </h3>
                      <p className="text-gray-600">
                        Anda dapat mengikuti kajian secara langsung di masjid
                        kami atau melalui live streaming.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Apakah ada biaya untuk mengikuti kajian?
                      </h3>
                      <p className="text-gray-600">
                        Tidak, semua kajian yang kami selenggarakan dapat
                        diikuti secara gratis.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Bagaimana cara berdonasi?
                      </h3>
                      <p className="text-gray-600">
                        Anda dapat berdonasi melalui transfer bank atau QRIS
                        yang tersedia di halaman Cashflow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
