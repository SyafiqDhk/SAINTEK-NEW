// src/components/admin/AdminLectures.tsx

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Lecture {
  id: number;
  title: string;
  speaker: string;
  date: string;
  description?: string;
}

const AdminLectures = () => {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const fetchLectures = async () => {
    const res = await api.get("/lectures");
    setLectures(res.data);
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/lectures", {
        title,
        speaker,
        date,
        description,
      });
      toast({ title: "Berhasil menambahkan kajian" });
      setTitle("");
      setSpeaker("");
      setDate("");
      setDescription("");
      fetchLectures();
    } catch (error) {
      toast({ title: "Gagal menambahkan kajian", variant: "destructive" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Tambah Kajian</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Judul Kajian</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label>Pemateri</Label>
              <Input value={speaker} onChange={(e) => setSpeaker(e.target.value)} required />
            </div>
            <div>
              <Label>Tanggal & Waktu</Label>
              <Input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
              <Label>Deskripsi</Label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Simpan Kajian
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-4">
        {lectures.map((lecture) => (
          <Card key={lecture.id}>
            <CardHeader>
              <CardTitle>{lecture.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Pemateri: {lecture.speaker}</p>
              <p className="text-gray-700">Tanggal: {new Date(lecture.date).toLocaleString()}</p>
              {lecture.description && <p className="text-gray-700">Deskripsi: {lecture.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminLectures;
