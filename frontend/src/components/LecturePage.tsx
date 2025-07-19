import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, MapPin } from "lucide-react";
import api from "@/lib/api";


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
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    const fetchLectures = async () => {
        try {
          const res = await api.get("/lectures");
          const data = res.data;

          const processedLectures = data.map((item: any) => {
            const lectureDate = new Date(item.date);
            return {
              id: item.id,
              title: item.title,
              description: item.description || "-",
              date: item.date,
              time: lectureDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
              speaker: item.speaker,
              location: item.location || "Masjid",
              category: item.category || "Umum",
              isUpcoming: lectureDate >= new Date(),
            };
          });

          setLectures(processedLectures);
        } catch (error) {
          console.error("Gagal fetch lectures:", error);
        }
      };

      fetchLectures();
  }, []);

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
            Kajian akan tampil setelah diinput admin.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Lectures */}
        {upcomingLectures.length > 0 && (
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
        )}

        {/* Past Lectures */}
        {pastLectures.length > 0 && (
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
        )}

        {lectures.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Belum ada kajian yang tersedia. Silakan tunggu hingga admin menginput jadwal.
          </p>
        )}
      </div>
    </div>
  );
};

export default LecturePage;
