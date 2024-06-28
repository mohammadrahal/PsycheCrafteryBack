const FEEDBACK = require("../models/feedbackModel");

const getFeed = async (_, res) => {
  try {
    const feedback = await FEEDBACK.find({});

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "no feedback",
      });
    }

    return res.status(200).json({
      success: true,
      message: "feedback found",
      data: feedback,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const addFeed = async (req, res) => {
  const { fullName, email, description, message } = req.body;
  try {
    const feedback = new FEEDBACK({
      fullName,
      email,
      description,
      message
    });
    await feedback.save();
    return res.status(200).json({
      success: true,
      message: "Youre message send successfully",
      data: feedback,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const approveFeed = async (req, res) => {
  const { ID } = req.params;
  try {
    const feedback = await FEEDBACK.findByIdAndUpdate(
      ID,
      { approve: "true" },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: feedback,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// delete
const deleteFeed = async (req, res) => {
  const { ID } = req.params;
  try {
    const feedback = await FEEDBACK.deleteOne({ _id: ID });
    res.status(200).json({
      success: true,
      message: "feedback deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occured while deleting feedback",
      error: error,
    });
  }
};

module.exports = {
  getFeed,
  addFeed,
  approveFeed,
  deleteFeed,
};
