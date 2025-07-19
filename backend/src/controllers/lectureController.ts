import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createLecture = async (req: Request, res: Response) => {
  try {
    const { title, speaker, date, description } = req.body;
    const lecture = await prisma.lecture.create({
      data: {
        title,
        speaker,
        date: new Date(date),
        description,
      },
    });
    res.json(lecture);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getLectures = async (_: Request, res: Response) => {
  try {
    const lectures = await prisma.lecture.findMany({
      orderBy: { date: "desc" },
    });
    res.json(lectures);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
