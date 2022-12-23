import mongoose from "mongoose";
 
const Vehicle = mongoose.Schema({
    "VIN (1-10)":{
        type: String,
        required: true
    },
    County:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        require : true
    }

});
 
export default mongoose.model('vehicle',Vehicle, 'vehicle' );