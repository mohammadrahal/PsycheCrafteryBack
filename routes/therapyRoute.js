const express = require("express");
const router = express.Router();

const {
    getTherapy,
    getById,
    addTherapy,
    updateTherapy,
    deleteById
} = require('../controller/therapyController')

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


router.get('/gettherapy',  getTherapy)
router.get('/therapyById/:ID', getById)
router.post('/addtherapy', upload.single('image'), addTherapy)
router.put('/updateTherapy/:therapyId', upload.single('image'), updateTherapy);
router.delete('/deleteTherapy/:ID', deleteById)



module.exports = router


