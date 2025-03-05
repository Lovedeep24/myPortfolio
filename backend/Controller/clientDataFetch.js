const Client = require("../Models/client"); // Adjust the path based on your project structure

const clientDataFetch = async (req, res) => {
    try {
        const clientData = await Client.find();
        const pendingRequests = await Client.find({ status: "pending" }).select("email");
        const emailList = pendingRequests.map((item) => item.email);
        
        console.log("Pending Requests:", emailList);
        return res.status(200).json({ message: "Clients Data Fetched Successfully", data: clientData });
    } catch (error) {
        console.error("Error:", error); // Log error
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = clientDataFetch;
