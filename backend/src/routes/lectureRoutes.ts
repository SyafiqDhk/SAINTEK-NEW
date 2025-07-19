import { Router } from "express";
import { createLecture, getLectures } from "../controllers/lectureController";

const router = Router();

router.post("/", createLecture);
router.get("/", getLectures);

export default router;
