import mongoose from "mongoose";    
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    urlfotodono: {
        type: String,
        required: true,
        
        
    },
    cutidopor: {
        type: String,
        required: true,

    },
    
});
       
export default mongoose.model("User", userSchema)