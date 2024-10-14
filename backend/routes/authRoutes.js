import express from "express";
import { userCheck, login, register } from "../controllers/authController.js"

const router = express.Router()

router.get("/userCheck", userCheck)
router.post("/login", login)
router.post("/register", register)

export default router