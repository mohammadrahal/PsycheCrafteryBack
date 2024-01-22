const express = require("express");
const router = express.Router();

const {
  getFeed,
  addFeed,
  approveFeed,
  deleteFeed,
} = require("../controller/feedbackcontroller");

router.get("/getFeedBack", getFeed);
router.post("/addFedd", addFeed);
router.put('/approvedFeed/:ID', approveFeed)
router.delete('/deleteFeed/:ID', deleteFeed)
module.exports = router;
