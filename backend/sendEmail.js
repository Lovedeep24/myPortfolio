const nodemailer = require("nodemailer");

const { CronJob } = require('cron');
const Clients = require("./Models/client");
require("dotenv").config();

// Configure mail transporter
const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email provider
    auth: {
        user: "oberoynick@gmail.com",  
        pass:  "pmfw rxhu qezo xnrr"
        }
});

const sendEmail = async (id,from, to, subject, desc) => {
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: desc,
       
    };
    try {
        await transporter.sendMail(mailOptions);
        await Clients.findByIdAndUpdate(id, { status: "sent" })
        console.log(`Email sent successfully to ${to}`);
    } 
    catch (error)
    {
        console.error("Error sending email:", error);
    }
}

const sendPendingEmails = async() => {
    try {
        const pendingRequests = await Clients.find({status:"pending"});
        if(!pendingRequests)
        {
            console.log("All pending emails sent successfully.");
        }
        for (const request of pendingRequests) {
             const id= request._id;
             const from = "oberoynick@gmail.com"
             const to = "lovedeepbidhan0@gmail.com"; // Your email where you receive them
             const subject=  `New Request from ${request.email}: ${request.subject}`;
             const desc= `${request.description}`;
             await sendEmail(id,from, to, subject, desc);
           
        }
        console.log("All pending emails sent successfully.");
    } 
    catch (error) {
        console.error("Error sending email:", error);
        console.error("Internal server error:", error);
;
    }
};

const cronJob = new CronJob(
  '0 9 * * *', 
  sendPendingEmails,
  null,
  true, // Start the job right now
  'Asia/Kolkata' // Indian time zone
);

module.exports = cronJob, transporter ;

