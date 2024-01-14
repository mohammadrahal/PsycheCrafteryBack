const FAQ = require("../models/faqModel");

// add faq questions
const addFaq = async (req, res) => {
  try {
    const faq = await FAQ.create(req.body);
    return res.status(200).json({
      success: true,
      message: "FAQ added ",
      data: faq,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get faq question
const getFaq = async (_, res) => {
  try {
    const faq = await FAQ.find({});
    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// update
const updateFaq = async (req, res) => {
  const { ID } = req.params;
  const { question, answer } = req.body;
  try {
    const faq = await FAQ.findByIdAndUpdate(
      ID,
      { question, answer },
      { new: true }
    );

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "No Faq found to update",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Faq updated",
      data: faq,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};



const deleteFaq = async (req, res) =>{
    const {ID} = req.params
    try {
        const faq = await FAQ.findByIdAndDelete(ID)
        if (!faq) {
            return res.status(404).json({
              success: false,
              message: "No Faq found to delete",
            });
          }
          return res.status(200).json({
            success: true,
            message: "Faq Deleted",
            data: faq,
          });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
          });
    }
}



module.exports = {
  addFaq,
  getFaq,
  updateFaq,
  deleteFaq
};
