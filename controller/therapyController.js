const THERAPY = require("../models/therapistModel");
const USER = require("../models/userModel");
const { imageUploader } = require("../extra/imageUploader");

// get all therapy
const getTherapy = async (_, res) => {
  const therapy = await THERAPY.find().populate('userId', 'fullName email password phoneNumber address');
  try {
    if (!therapy || therapy.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no therapy found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "all therapiest",
      data: therapy,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// by id
const getById = async (req, res) => {
  const { ID } = req.params;
  const therapy = await THERAPY.findById(ID).populate('userId', 'fullName email password phoneNumber address');
  try {
    if (!therapy || therapy.length === 0) {
      return res.status(404).json({
        success: false,
        message: `no therapy found with ID`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "therapy found",
      data: therapy,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};


//add therapy
const addTherapy = async (req, res) => {
  const { userId, description, education, specialization } = req.body;
  try {
    const user = await USER.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    user.role = 'therapy';
    await user.save();
    const imageURL = await imageUploader(req);
    const therapy = new THERAPY({
     userId,
      description,
      education,
      specialization,
      image: imageURL,
    });

    // console.log(user)
    // console.log(therapy)
    await therapy.save();
    return res.status(200).json({
      success: true,
      message: "therapy added successfully",
      data: therapy,
    });

  } catch (error) {
    return res.status(400).json({
      success:false,
      message: error.message,
    });
  }
};




// delete therapy
const deleteById = async (req, res) => {
  try {
    const { ID } = req.params;
    const user = await THERAPY.deleteOne({ _id: ID})
    res.status(200).json({
      success: true,
      message: 'Therapy deleted successfully',
      data:user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error occured while deleting the user',
      error: error,
    });
  }
};


module.exports = {
  getTherapy,
  getById,
  addTherapy,
  deleteById,
};
