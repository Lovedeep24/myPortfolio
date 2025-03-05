const express = require("express");

const clientsDataFetch = require("../Controller/clientDataFetch");
const addProject= require("../Controller/addProject")
const addClient=require("../Controller/clientController")
const router = express.Router();

router.get("/clients", clientsDataFetch );
router.post("/clients/req", addClient);
router.post("/add-project", addProject);


module.exports = router;
