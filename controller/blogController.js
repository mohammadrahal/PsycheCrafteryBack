const Blog = require("../models/blogModel");

// add faq questions
const addBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    return res.status(200).json({
      success: true,
      message: "blog added ",
      data: blog,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get faq question
const getBlog = async (_, res) => {
  try {
    const blog = await Blog.find({});
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "blog not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// update
const updateBlog = async (req, res) => {
  const { ID } = req.params;
  const { title, content } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      ID,
      { title, content },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "No blog found to update",
      });
    }
    return res.status(200).json({
      success: true,
      message: "blog updated",
      data: blog,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};



const deleteBlog = async (req, res) =>{
    const {ID} = req.params
    try {
        const blog = await Blog.findByIdAndDelete(ID)
        if (!blog) {
            return res.status(404).json({
              success: false,
              message: "No blog found to delete",
            });
          }
          return res.status(200).json({
            success: true,
            message: "blog Deleted",
            data: blog,
          });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
          });
    }
}



module.exports = {
  addBlog,
  getBlog,
  updateBlog,
  deleteBlog
};
