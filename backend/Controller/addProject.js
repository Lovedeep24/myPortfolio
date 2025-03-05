const Project = require("../Models/projects")
const addProject=async(req,res)=>{
    try {
        const { name, projectId, description, techStack, images } = req.body;
    
        // Check if projectId already exists
        const existingProject = await Project.findOne({ projectId });
        if (existingProject) {
          return res.status(400).json({ message: 'Project with this ID already exists' });
        }
    
        const newProject = new Project({ name, projectId, description, techStack, images });
        await newProject.save();
    
        res.status(201).json({ message: 'Project added successfully', project: newProject });
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
}

module.exports=addProject;