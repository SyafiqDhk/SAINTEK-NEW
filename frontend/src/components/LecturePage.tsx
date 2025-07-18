import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, MapPin } from "lucide-react";

interface Lecture {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  speaker: string;
  location: string;
  category: string;
  isUpcoming: boolean;
}

const LecturePage = () => {
  const [lectures] = useState<Lecture[]>([
    {
      id: 1,
      title: "Kontribusi Al-Khawarizmi dalam Matematika Modern",
      description:
        "Kajian mendalam tentang peran Al-Khawarizmi dalam pengembangan aljabar dan algoritma yang menjadi dasar komputasi modern.",
      date: "2024-07-25",
      time: "19:30",
      speaker: "Dr. Ahmad Faruqi",
      location: "Ruang Utama Masjid",
      category: "Matematika",
      isUpcoming: true,
    },
    {
      id: 2,
      title: "Ibn Sina dan Perkembangan Kedokteran",
      description:
        "Membahas kontribusi besar Ibn Sina dalam bidang kedokteran dan relevansinya dengan praktik medis modern.",
      date: "2024-08-01",
      time: "19:30",
      speaker: "Prof. Aminah Zahra",
      location: "Ruang Utama Masjid",
      category: "Kedokteran",
      isUpcoming: true,
    },
    {
      id: 3,
      title: "Astronomi dalam Peradaban Islam",
      description:
        "Kajian tentang pencapaian astronomi dalam peradaban Islam dan pengaruhnya terhadap perkembangan astronomi modern.",
      date: "2024-07-18",
      time: "19:30",
      speaker: "Ir. Hasan Mahmud",
      location: "Ruang Utama Masjid",
      category: "Astronomi",
      isUpcoming: false,
    },
    {
      id: 4,
      title: "Teknologi Ramah Lingkungan dalam Islam",
      description:
        "Diskusi tentang prinsip-prinsip Islam dalam pengembangan teknologi yang ramah lingkungan dan berkelanjutan.",
      date: "2024-08-08",
      time: "19:30",
      speaker: "Dr. Ahmad Faruqi",
      location: "Ruang Utama Masjid",
      category: "Teknologi",
      isUpcoming: true,
    },
  ]);

  const upcomingLectures = lectures.filter((lecture) => lecture.isUpcoming);
  const pastLectures = lectures.filter((lecture) => !lecture.isUpcoming);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const LectureCard = ({ lecture }: { lecture: Lecture }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-gray-800">
            {lecture.title}
          </CardTitle>
          <Badge variant={lecture.isUpcoming ? "default" : "secondary"}>
            {lecture.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{lecture.description}</p>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(lecture.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{lecture.time} WIB</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{lecture.speaker}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{lecture.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-16 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Jadwal Kajian</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Kajian rutin tentang integrasi sains dan teknologi dalam perspektif
            Islam.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Lectures */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="h-1 w-16 bg-emerald-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Kajian Mendatang
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingLectures.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>

        {/* Past Lectures */}
        <div>
          <div className="flex items-center mb-6">
            <div className="h-1 w-16 bg-gray-400 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Kajian Sebelumnya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastLectures.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturePage;
