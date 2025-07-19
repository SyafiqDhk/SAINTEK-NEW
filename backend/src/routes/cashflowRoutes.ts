import { Router } from "express";
import { createCashflow, getCashflows } from "../controllers/cashflowController";

const router = Router();

router.post("/", createCashflow);
router.get("/", getCashflows);

export default router;
