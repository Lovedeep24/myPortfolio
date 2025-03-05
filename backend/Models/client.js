
const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    name: {  
        type: String,
        required: [true, "You must give your name"]
    },
    email: {
        type: String, 
        required: [true, "You must give an email"],
        lowercase: true,
        trim: true
    },
    subject: {
        type: String,  
        required: [true, "You must add a subject"]
    },
    description: {
        type: String,  
        required: [true, "You must give a description"]
    },
    status: {
        type: String,  
        default: "pending" 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Client = mongoose.model('Client', clientSchema);  // Model name capitalized

module.exports=Client;
