import express from "express";
import { test, update } from "../controllers/businessController.js";

const business = express.Router()

business.get('/businessCheck', test)
business.post('/businessUpdate', update)

export default business