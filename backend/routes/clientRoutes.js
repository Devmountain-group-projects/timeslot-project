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
router.put("/updateClient/:clientId", updateClient);
router.delete('/removeClient/:clientId', removeClient);

export default router;