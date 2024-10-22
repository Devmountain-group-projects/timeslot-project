import express from "express";
import { test, update, updatePhoto, getPhoto } from "../controllers/businessController.js";

const business = express.Router()

business.get('/businessCheck', test)
business.post('/businessUpdate', update)
business.post('/updatePhoto', updatePhoto)
business.get('/getPhoto', getPhoto)

export default business