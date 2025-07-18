import { Router, Express } from "express";
import AdminController from "../controllers/adminController";

const router = Router();
const adminController = new AdminController();

export function setAdminRoutes(app: Express) {
  app.use("/api/admin", router);

  router.post("/", adminController.createAdmin.bind(adminController));
  router.get("/:id", adminController.getAdmin.bind(adminController));
  router.put("/:id", adminController.updateAdmin.bind(adminController));
  router.delete("/:id", adminController.deleteAdmin.bind(adminController));
}
