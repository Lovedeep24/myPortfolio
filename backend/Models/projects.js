
const mongoose = require("mongoose")
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String], // Array of technologies used
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    default: [],
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Project = mongoose.model('Project', projectSchema);

module.exports= Project;
