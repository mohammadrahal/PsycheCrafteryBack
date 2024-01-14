const express = require("express");
const router = express.Router();

const {
    getappiot,
    request,
    accepted,
    canceled,
    
} = require('../controller/appointmentController')



router.get('/getappiot', getappiot)
router.post('/request', request)
router.put('/accept/:ID', accepted)
router.delete('/cancel/:ID', canceled)


module.exports = router;