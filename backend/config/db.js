const mongoose = require(`mongoose`);

const connectToMongoDb=async(error)=>{
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error Connecting DataBase",error.message);
    }
}

module.exports= connectToMongoDb;