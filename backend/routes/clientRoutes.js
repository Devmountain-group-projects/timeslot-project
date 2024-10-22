import express from "express";
import {
    getClients,
    createClient,
    updateClient,
    removeClient,
} from "../controllers/clientController.js"

const router = express.Router()

router.get("/getClients", getClients);
router.post("/createClient", createClient)
router.put("/updateClient", updateClient);
router.delete("/removeClient", removeClient);

export default router;