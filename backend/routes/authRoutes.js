import express from "express";
import { test, login } from "../controllers/authController.js"

const router = express.Router()

router.get("/test", test)
router.get("/login", login)

export default router