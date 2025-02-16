const prisma = require("../DB/db.config");

const handleClientReq = async (req, res) => {
    console.log("Received request:", req.body); // Log request data

    const { name, email, subject, description } = req.body;

    try {
        if (!name || !email || !subject || !description) {
            console.log("Validation failed: Missing fields"); // Log missing fields
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        console.log("Creating client entry in database..."); // Log DB operation

        const newClient = await prisma.client.create({
            data: {
                name,
                email,
                subject,
                description,
            },
        });

        console.log("Client added successfully:", newClient); // Log success
        return res.status(200).json({ message: "Client Added Successfully", data: newClient });

    } catch (error) {
        console.error("Error:", error); // Log error
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = handleClientReq;
