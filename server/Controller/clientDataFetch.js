const prisma = require("../DB/db.config");

const clientDataFetch = async(req, res) => {
    try {
        const clientData = await prisma.client.findMany();
        const pendingRequests = await prisma.client.findMany({
            where: {status: "pending"},
            select:{email:true}
        })
        const emailList=pendingRequests.map((item)=>item.email);
        console.log("Pending Requests:", emailList);
        return res.status(200).json({ message: "Clients Data Fetched Successfully", data: clientData });
    } catch (error) {
        console.error("Error:", error); // Log error
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = clientDataFetch;
