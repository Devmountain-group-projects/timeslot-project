import express from "express";
import {
    test,
    update,
    updatePhoto,
    getPhoto,
    getServices,
} from "../controllers/businessController.js";

const business = express.Router();

business.get("/businessCheck", test);
business.post("/businessUpdate", update);
business.post("/updatePhoto", updatePhoto);
business.get("/getPhoto", getPhoto);
business.get("/services/:businessId", getServices);

export default business;
