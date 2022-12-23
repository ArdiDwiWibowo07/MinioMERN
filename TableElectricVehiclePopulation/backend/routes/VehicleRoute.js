import express from "express";
import { getVehicles } from "../controllers/VehicleControllers.js";

 
const router = express.Router();
 
router.get('/vehicles', getVehicles);
export default router;