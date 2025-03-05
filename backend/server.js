const express=require("express");
require('dotenv').config();
const cronJob= require("./sendEmail");
const clientRoutes= require("./Routes/auth");
const connectToMongoDb = require("./config/db")
const app=express();
const cors=require("cors");


app.use(cors());
// dotenv.config();
app.use(express.json());


const PORT=process.env.PORT || 4000;

cronJob.start();
app.listen(PORT,()=>{
    console.log(`Server Started`);
    connectToMongoDb()
  .then(() => {
      console.log('Connected to MongoDB');

  })
})

app.use("",clientRoutes);