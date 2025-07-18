import { Request, Response } from "express";
import AdminService from "../services/adminService";

// Anda perlu menginisialisasi adminModel, misal dari model mongoose atau mock
import adminModel from "../models/adminModel"; // pastikan file ini ada

class AdminController {
  private adminService: AdminService;

  constructor() {
    this.adminService = new AdminService(adminModel);
  }

  public createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const adminData = req.body;
      const newAdmin = await this.adminService.createAdmin(adminData);
      res.status(201).json(newAdmin);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public getAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const adminId = req.params.id;
      const admin = await this.adminService.getAdmin(adminId);
      if (admin) {
        res.status(200).json(admin);
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public updateAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const adminId = req.params.id;
      const adminData = req.body;
      const updatedAdmin = await this.adminService.updateAdmin(
        adminId,
        adminData
      );
      if (updatedAdmin) {
        res.status(200).json(updatedAdmin);
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public deleteAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const adminId = req.params.id;
      const deleted = await this.adminService.deleteAdmin(adminId);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Admin not found" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default AdminController;
