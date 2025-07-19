import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCashflow = async (req: Request, res: Response) => {
  try {
    const { title, amount, type, date } = req.body;
    const cashflow = await prisma.cashflow.create({
      data: {
        title,
        amount,
        type,
        date: new Date(date),
      },
    });
    res.json(cashflow);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getCashflows = async (_: Request, res: Response) => {
  try {
    const cashflows = await prisma.cashflow.findMany({
      orderBy: { date: "desc" },
    });
    res.json(cashflows);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
