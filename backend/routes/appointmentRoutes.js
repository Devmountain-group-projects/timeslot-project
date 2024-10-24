import express from "express";
import {
    addAppointment,
    removeAppointment,
    updateAppointment,
    getAppointment,
    getAppointments,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/addAppointment", addAppointment);
router.delete("/removeAppointment", removeAppointment);
router.put("/updateAppointment/:appointmentId", updateAppointment);
router.get("/getAppointment", getAppointment);
router.get("/getAppointments", getAppointments);
router.get("/getAppointments/user/:userId", getAppointments);
router.get("/getAppointments/business/:businessId", getAppointments);

export default router;
