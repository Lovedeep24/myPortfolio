const nodemailer = require("nodemailer");
const prisma = require("../DB/db.config");
const { CronJob } = require('cron');

require("dotenv").config();

// Configure mail transporter
const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email provider
    auth: {
        user: "oberoynick@gmail.com",  
        pass:  "pmfw rxhu qezo xnrr"
        }
});
// console.log(process.env.SENDER_MAIL);
// console.log(process.env.APP_PASS);
// console.log(process.env.RECEIVER_EMAIL);

const sendEmail = async (id,from, to, subject, desc) => {
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: desc,
       
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.client.update({
            where: { id: id },
            data: { status: "sent" } 
        });
        console.log(`Email sent successfully to ${to}`);
    } 
    catch (error)
    {
        console.error("Error sending email:", error);
    }
}

const sendPendingEmails = async(req,res) => {
    try {
        const pendingRequests = await prisma.client.findMany({
            where: { status: "pending" },
            select: { id:true,name: true, email: true, subject: true, description: true }
        });

        for (const request of pendingRequests) {
             const id= request.id;
             const from = "oberoynick@gmail.com"
             const to = "lovedeepbidhan0@gmail.com"; // Your email where you receive them
             const subject=  `New Request from ${request.email}: ${request.subject}`;
             const desc= `${request.description}`;
             await sendEmail(id,from, to, subject, desc);
           
        }
        return res.status(200).json({ message: "All Email sent successfully" });
    } 
    catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Create and start the cron job
const cronJob = new CronJob(
  '0 */3 * * *', 
  sendPendingEmails,
  null,
  true, // Start the job right now
  'Asia/Kolkata' // Indian time zone
);

module.exports = { sendPendingEmails, cronJob, transporter };

