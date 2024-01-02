const express = require("express");
const router = express.Router();

const { 
    addFaq,
     getFaq,
     updateFaq,
     deleteFaq
    } = require("../controller/faqController");

router.post("/addFaq", addFaq);
router.get("/getFaq", getFaq)
router.put('/updateFaq/:ID', updateFaq)
router.delete('/deleteFaq/:ID', deleteFaq)
module.exports = router;
