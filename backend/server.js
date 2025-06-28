const express=require("express");
require('dotenv').config();
const clientRoutes= require("./Routes/auth");
const connectToMongoDb = require("./config/db")
const app=express();
const cors=require("cors");


app.use(cors());
// dotenv.config();
app.use(express.json());


const PORT = process.env.PORT || 4000;
connectToMongoDb()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

app.use("",clientRoutes);