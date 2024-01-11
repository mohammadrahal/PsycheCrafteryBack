const USER = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/generateToken");

// get all users
const getUser = async (_, res) => {
  //.select('-password') to get user info without password
  const user = await USER.find({}).select("-password");
  try {
    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no users found",
      });
    }

    return res.status(200).json({
      success: true,
      message:'users found',
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get by id
const getById = async (req, res) => {
  // don't write req.params.ID
  const { ID } = req.params;
  const user = await USER.findById(ID);
  try {
    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: `user not found`,
      });
    }
    return res.status(200).json({
      success: true,
      message: `user found`,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// register
const register = async (req, res) => {
  const { fullName, email, password, phoneNumber, address } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new USER({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      address,
    });
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Registration successful",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }     
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await USER.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email or Password Wrong",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Email or Password Wrong",
      });
    }

    const token = generateToken(user._id, user.role);
    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred during login.",
    });
  }
};

// update data
const update = async (req, res) => {
  const { ID } = req.params;
  const { fullName, email, phoneNumber, password, address } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await USER.findByIdAndUpdate(
      ID,
      { fullName, email, phoneNumber, address, password: hashedPassword },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// switch to admin
const switchToAdmin = async (req, res) => {
  const { ID } = req.params;
  try {
    const switchUser = await USER.findOneAndUpdate(
      { _id: ID },
      { $set: { role: "admin" } },
      { new: true }
    );

    if (!switchUser) {
      return res.status(400).json({
        success: false,
        message: `User  not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: `User switched to admin successfully`,
      data: switchUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to switch to admin`,
      error: error.message,
    });
  }
};

// delete
const deleteById = async (req, res) => {
  try {
    const { ID } = req.params;
    const user = await USER.deleteOne({ _id: ID });
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occured while deleting the user",
      error: error,
    });
  }
};

module.exports = {
  getUser,
  getById,
  register,
  login,
  update,
  switchToAdmin,
  deleteById,
};
