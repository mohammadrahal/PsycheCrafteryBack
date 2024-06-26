const express = require("express");
const router = express.Router();

const { 
    addBlog,
     getBlog,
     updateBlog,
     deleteBlog
    } = require("../controller/blogController");

router.post("/addBlog", addBlog);
router.get("/getBlog", getBlog)
router.put('/updateBlog/:ID', updateBlog)
router.delete('/deleteBlog/:ID', deleteBlog)
module.exports = router;
