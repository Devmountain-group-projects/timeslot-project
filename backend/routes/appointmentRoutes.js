import express from "express";
import {
    createClient,
    updateClient,
    removeClient,
    addAppointment,
    removeAppointment,
    updateAppointment,
    getAppointment,
    getAppointmentByBusiness,
    getAppointmentByUser,
} from "../controllers/appointmentController.js"

const router = express.Router()

router.post("/createClient", createClient)
router.post("/updateClient", updateClient);
router.delete("/removeClient", removeClient);
router.post("/addAppointment", addAppointment)
router.delete("/removeAppointment", removeAppointment)
router.post("/updateAppointment", updateAppointment)
router.get("/getAppointment", getAppointment)
router.get("/getAppointmentByBusiness", getAppointmentByBusiness)
router.get("/getAppointmentByUser", getAppointmentByUser)

export default router;