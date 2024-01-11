const express = require("express");
const router = express.Router();

const {
    getTherapy,
    getById,
    addTherapy,
    therapyCounter
} = require('../controller/therapyController')

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


router.get('/gettherapy',  getTherapy)
router.get('/therapyById/:ID', getById)
router.get('/therapyCounter', therapyCounter);
router.post('/addtherapy', upload.single('image'), addTherapy)







module.exports = router