import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Mengenal lebih dekat Masjid Al-Mahally sebagai pusat kajian sains
            dan teknologi dalam perspektif Islam.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Vision & Mission */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Visi & Misi</h2>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-emerald-700">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Menjadi pusat unggulan dalam pengembangan dan integrasi kajian
                  sains dan teknologi dengan nilai-nilai Islam, serta menjadi
                  jembatan antara tradisi keilmuan Islam klasik dengan
                  perkembangan ilmu pengetahuan modern.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-700">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Menyelenggarakan kajian-kajian berkualitas yang
                    mengintegrasikan perspektif Islam dengan sains dan
                    teknologi.
                  </li>
                  <li>
                    Mendokumentasikan dan menyebarluaskan kontribusi ilmuwan
                    Muslim dalam perkembangan sains dan teknologi sepanjang
                    sejarah.
                  </li>
                  <li>
                    Membangun kesadaran masyarakat tentang pentingnya integrasi
                    nilai-nilai Islam dalam pengembangan sains dan teknologi
                    modern.
                  </li>
                  <li>
                    Memfasilitasi pengembangan penelitian dan inovasi yang
                    selaras dengan nilai-nilai Islam.
                  </li>
                  <li>
                    Membangun jaringan kerjasama dengan berbagai institusi
                    pendidikan, riset, dan keagamaan untuk memperkuat integrasi
                    sains dan Islam.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* History */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Sejarah</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Masjid Al-Mahally didirikan pada tahun 2020 oleh sekelompok
                  akademisi dan profesional Muslim yang memiliki keprihatinan
                  terhadap kesenjangan antara kajian Islam dan perkembangan
                  sains modern.
                </p>
                <p className="text-gray-700 mb-4">
                  Dengan dukungan dari berbagai pihak, Masjid Al-Mahally terus
                  berkembang dan memperluas jangkauannya, tidak hanya dalam
                  bentuk kajian tatap muka, tetapi juga melalui platform
                  digital.
                </p>
                <p className="text-gray-700">
                  Saat ini, Masjid Al-Mahally telah menjadi salah satu rujukan
                  dalam kajian integrasi sains dan Islam.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Programs */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Program Unggulan
              </h2>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-emerald-700">
                    Kajian Sains & Islam
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Kajian mingguan yang membahas integrasi berbagai cabang ilmu
                    sains dengan perspektif Islam, dibawakan oleh akademisi dan
                    ulama yang kompeten di bidangnya.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-emerald-700">
                    Workshop Teknologi Islami
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Workshop praktis yang mengajarkan keterampilan teknologi
                    dengan memperhatikan aspek etika dan nilai-nilai Islam.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-emerald-700">
                    Seminar Ilmuwan Muslim
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Seminar berkala yang memperkenalkan kontribusi ilmuwan
                    Muslim sepanjang sejarah dan relevansinya dengan
                    perkembangan sains modern.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
