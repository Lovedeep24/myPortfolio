const express=require("express");
require('dotenv').config();
const clientRoutes= require("./Routes/auth");
const connectToMongoDb = require("./config/db")
const app=express();
const cors=require("cors");


app.use(cors());
// dotenv.config();
app.use(express.json());


const PORT=4000;

app.listen(PORT,()=>{
    console.log(`Server Started`);
    connectToMongoDb()
  .then(() => {
      console.log('Connected to MongoDB');

  })
})

app.use("",clientRoutes);