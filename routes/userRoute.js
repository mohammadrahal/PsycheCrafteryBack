const express = require('express')
const router = express.Router()

const {
    getUser,
    getById,
    register,
    login,
    update
} 
=require('../controller/userController')


router.get('/get', getUser)
router.get('/getById/:ID', getById)
router.post('/register', register)
router.post('/login', login)
router.put('/update/:ID', update)


module.exports = router
