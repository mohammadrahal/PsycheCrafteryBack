const THERAPY = require("../models/therapist");
const bcrypt = require("bcrypt");
const { imageUploader } = require("../extra/image");

// get all therapy
const getTherapy = async (_, res) => {
  const therapy = await THERAPY.find({});
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
const getByid = async (req, res) => {
  const { ID } = req.params;
  const therapy = await THERAPY.findById(ID).select("-password");
  try {
    if (!therapy || therapy.length === 0) {
      return res.status(404).json({
        success: false,
        message: `no therapy found with ID`,
      });
    }
    return res.status(200).json({
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
  const {
    fullName,
    description,
    education,
    email,
    password,
    specialization,
    phone,
    address,
  } = req.bpdy;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const therapy = new THERAPY({
        
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTherapy,
  getByid,
};
