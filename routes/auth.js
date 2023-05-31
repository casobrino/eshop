import { Router } from "express";
import { register } from "../controllers/authController.js";
//Register
const router = Router();
router.post("/register", register);

//Login

export default router;
