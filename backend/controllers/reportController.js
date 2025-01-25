import { log } from "console";
import Report from "../models/reportModels.js";
import User from "../models/userModels.js";
import fs from 'fs'

//add report
const addReport = async (req, res) => {
  try {
    const { title, description, category, location, date } = req.body;

    if (!title || !description || !category || !location || !date) {
      return res.json({
        success: false,
        message: "Please fill all the fields.",
      });
    }
    const image_filename = `${req.file.filename}`;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.json({ success: false, message: "Error in finding user " });
    }
    const newReport = new Report({
      title: title,
      description: description,
      image: image_filename,
      category: category,
      location: location,
      date: date,
      reportedBy: user.name,
    });
    await newReport.save();
    res.json({ success: true, message: "Report added successfully." });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// list all reports
const listReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json({ success: true, reports });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//list my reports
const userReports = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const reports = await Report.find({ reportedBy: user.name });
    res.json({ success: true, reports });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//edit report
const editReport = async (req, res) => {
  const { title, description, category, location, date, _id } = req.body;
  try {
    if (!title || !description || !category || !location || !date) {
      return res.json({
        success: false,
        message: "Please fill all the fields.",
      });
    }
    const existingReport = await Report.findById(_id);
    if (!existingReport) {
      return res.json({
        success: false,
        message: "Report not found.",
      });
    }
    const image_filename = req.file ? req.file.filename : existingReport.image;
    await Report.findByIdAndUpdate(_id, {
      title: title,
      description: description,
      category: category,
      location: location,
      date: date,
      image: image_filename,
    });
    res.json({ success: true, message: "Report updated successfully." });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//delete report
const deleteReport = async (req, res) => {
  const { id, image } = req.body;
  try {
    fs.unlink(`uploads/${image}`, (err) => {
      if (err) {
        return res.json({ success: false, message: err.message });
      }
    });
    await Report.findByIdAndDelete(id);
    res.json({ success: true, message: "Report deleted successfully." });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//update status
const updateStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    const report = await Report.findById(id);
    if (!report) {
      return res.json({ success: false, message: "Report not found." });
    }
    report.status = status;
    await report.save()
    return res.json({ success: true, message: `Status updated successfully for ${report.title}` });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}

//track report
const trackReport = async (req, res) => {
  const userId=req.userId
  const user = await User.findById(userId)
  const reports=await Report.find({reportedBy:user.name})
  res.json({ success: true,reports });
}

export { addReport, listReports, userReports, editReport, deleteReport,updateStatus,trackReport };
