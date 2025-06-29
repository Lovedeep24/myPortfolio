const Client = require("../Models/client")
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "oberoynick@gmail.com",  
        pass:  "pmfw rxhu qezo xnrr"
        }
});
const sendEmail = async (id,from, to, subject, desc,email) => {
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: desc,
        replyTo: email
    };
    try {
        await transporter.sendMail(mailOptions);
        await Client.findByIdAndUpdate(id, { status: "sent" })
        console.log(`Email sent successfully to ${to}`);
    } 
    catch (error)
    {
        console.error("Error sending email:", error);
    }
}

const handleClientReq = async (req, res) => {
    console.log("Received request:", req.body); // Log request data

    const { name, email, subject, description } = req.body;
    const mailBody=`
    You've received a new message via your portfolio contact form:
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    
    Message:
    ${description}
    
    Best regards,
    Portfolio Bot
    `;
    try {
        if (!name || !email || !subject || !description) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        console.log("Creating client entry in database..."); // Log DB operation

        const newClient = new Client({
            name,
            email,
            subject,
            description,
        });

        await newClient.save(); // Save to MongoDB

        console.log("Client added successfully:", newClient); // Log success
        const from = "oberoynick@gmail.com";
        const to = "lovedeep24253@gmail.com"; // Receiver (your email)
        const mailSubject = `New Request from ${email}: ${subject}`;
        const mailText = mailBody;
        await sendEmail(newClient._id, from, to, mailSubject, mailText,email);
        return res.status(200).json({ message: "Client Added Successfully", data: newClient });

    } catch (error) {
        console.error("Error:", error); // Log error
        return res.status(500).json({ message: "Internal server error" });
    }
};
module.exports= handleClientReq;
