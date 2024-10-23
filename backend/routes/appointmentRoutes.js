import express from "express";
import {
    addAppointment,
    removeAppointment,
    updateAppointment,
    getAppointment,
    getAppointmentByBusiness,
    getAppointmentByUser,
} from "../controllers/appointmentController.js"

const router = express.Router()

router.post("/addAppointment", addAppointment)
router.delete("/removeAppointment", removeAppointment)
router.put("/updateAppointment", updateAppointment)
router.get("/getAppointment", getAppointment)
router.get("/getAppointmentByBusiness/:businessId", getAppointmentByBusiness)
router.get("/getAppointmentByUser/:userId", getAppointmentByUser)

export default router;