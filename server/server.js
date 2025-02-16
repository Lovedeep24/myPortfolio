const express=require("express");
require('dotenv').config();
const {cronJob} = require("./Controller/emailService");
const clientRoutes= require("./Routes/clientRoutes");
const app=express();
const cors=require("cors");


app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 4000;
cronJob.start();
app.listen(PORT,()=>{
    console.log(`Server Started`);
})

app.use("",clientRoutes);