const express = require("express");
const router = express.Router();

const { 
    addFaq,
     getFaq,
     updateFaq,
     deleteFaq
    } = require("../controller/faqController");

router.post("/add", addFaq);
router.get("/get", getFaq)
router.put('/update/:ID', updateFaq)
router.delete('/delete/:ID', deleteFaq)
module.exports = router;
