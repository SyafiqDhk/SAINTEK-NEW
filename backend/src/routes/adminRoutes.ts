import { Router } from "express";
import adminController from "../controllers/adminController";

const router = Router();

router.post("/login", adminController.loginAdmin);
router.post("/", adminController.createAdmin);
router.get("/:id", adminController.getAdmin);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);

export default router;
