const express = require("express");
const router = express.Router();

const {
    getappiot,
    request,
    accepted,
    canceled,
    appById,
    deleteApp
} = require('../controller/appointmentController')



router.get('/getappiot', getappiot)
router.get('/getAppByTherapyId/:therapyId', appById)
router.post('/request', request)
router.put('/accept/:ID', accepted)
router.put('/cancel/:ID', canceled)
router.delete('/deleteApp/:ID', deleteApp)

module.exports = router;