import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Calendar, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Lecture {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  speaker: string;
  location: string;
  category: string;
}

const AdminLectures = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [lectures, setLectures] = useState<Lecture[]>([
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
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLecture, setEditingLecture] = useState<Lecture | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    speaker: "",
    location: "",
    category: "",
  });

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [isAdmin, navigate]);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      speaker: "",
      location: "",
      category: "",
    });
    setEditingLecture(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingLecture) {
      // Update existing lecture
      setLectures(
        lectures.map((lecture) =>
          lecture.id === editingLecture.id
            ? { ...lecture, ...formData }
            : lecture
        )
      );
      toast({
        title: "Kajian berhasil diperbarui",
        description: "Data kajian telah disimpan",
      });
    } else {
      // Add new lecture
      const newLecture = {
        id: Date.now(),
        ...formData,
      };
      setLectures([...lectures, newLecture]);
      toast({
        title: "Kajian berhasil ditambahkan",
        description: "Kajian baru telah dibuat",
      });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (lecture: Lecture) => {
    setEditingLecture(lecture);
    setFormData({
      title: lecture.title,
      description: lecture.description,
      date: lecture.date,
      time: lecture.time,
      speaker: lecture.speaker,
      location: lecture.location,
      category: lecture.category,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setLectures(lectures.filter((lecture) => lecture.id !== id));
    toast({
      title: "Kajian berhasil dihapus",
      description: "Data kajian telah dihapus dari sistem",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
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
            <h1 className="text-2xl font-bold text-gray-800">Kelola Kajian</h1>
            <p className="text-gray-600">
              Tambah, edit, atau hapus jadwal kajian
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={resetForm}
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah Kajian
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingLecture ? "Edit Kajian" : "Tambah Kajian Baru"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="title">Judul Kajian</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="Masukkan judul kajian"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Masukkan deskripsi kajian"
                      rows={3}
                    />
                  </div>

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
                    <Label htmlFor="time">Waktu</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="speaker">Pemateri</Label>
                    <Input
                      id="speaker"
                      value={formData.speaker}
                      onChange={(e) =>
                        setFormData({ ...formData, speaker: e.target.value })
                      }
                      placeholder="Nama pemateri"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="Lokasi kajian"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="category">Kategori</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      placeholder="Kategori kajian"
                      required
                    />
                  </div>
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
                    {editingLecture ? "Perbarui" : "Simpan"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Lectures List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lectures.map((lecture) => (
            <Card
              key={lecture.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{lecture.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(lecture)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(lecture.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{lecture.description}</p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {formatDate(lecture.date)} - {lecture.time} WIB
                    </span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{lecture.speaker}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                      {lecture.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {lectures.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Belum Ada Kajian
              </h3>
              <p className="text-gray-600 mb-4">
                Mulai tambahkan jadwal kajian untuk jamaah
              </p>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setIsDialogOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Tambah Kajian Pertama
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminLectures;
