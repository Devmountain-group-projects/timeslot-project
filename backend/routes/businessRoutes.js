import express from "express";
import { test, update, updatePhoto } from "../controllers/businessController.js";

const business = express.Router()

business.get('/businessCheck', test)
business.post('/businessUpdate', update)
business.post('/updatePhoto', updatePhoto)

export default business