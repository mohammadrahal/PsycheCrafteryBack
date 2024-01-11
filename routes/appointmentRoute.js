const express = require("express");
const router = express.Router();

const {
    request,
    accepted,
    canceled,
    addAppointment
} = require('../controller/appointmentController')



router.get('/request', request)
router.post('/take', addAppointment)
router.put('/accept/:ID', accepted)
router.delete('/cancel/:ID', canceled)




module.exports = router;