import Vehicle from "../models/VehicleModel.js";
 
export const getVehicles = async (req, res) => {
    try {
        const vehicle = await Vehicle.find();
        res.json(vehicle);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

