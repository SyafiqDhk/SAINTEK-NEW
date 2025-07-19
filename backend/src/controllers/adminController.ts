import { Request, Response } from "express";
import adminService from "../services/adminService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

class AdminController {
  public createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, password } = req.body;
      const newAdmin = await adminService.createAdmin(username, password);
      res.status(201).json(newAdmin);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public loginAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, password } = req.body;
      const admin = await adminService.loginAdmin(username, password);

      const token = jwt.sign(
        { adminId: admin.id, username: admin.username },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(200).json({
        message: "Login successful",
        token,
        admin: {
          id: admin.id,
          username: admin.username,
        },
      });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  };

  public getAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const adminId = parseInt(req.params.id);

      if (isNaN(adminId)) {
        res.status(400).json({ message: "Invalid admin ID" });
        return;
      }

      const admin = await adminService.getAdmin(adminId);
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
      const adminId = parseInt(req.params.id);
      const adminData = req.body;
      const updatedAdmin = await adminService.updateAdmin(adminId, adminData);
      res.status(200).json(updatedAdmin);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  public deleteAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const adminId = parseInt(req.params.id);
      await adminService.deleteAdmin(adminId);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default new AdminController();
