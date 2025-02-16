const express=require("express");
const handleClientReq=require("../Controller/clientController");
const clientDataFetch=require("../Controller/clientDataFetch");
// const sendPendingEmails=require("../Controller/emailService");
const router=express.Router();


router.post("/req",handleClientReq);
router.get("/fetch",clientDataFetch);
// router.get("/send",sendPendingEmails)
module.exports = router;