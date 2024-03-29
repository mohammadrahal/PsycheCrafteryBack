const express = require('express')
const router = express.Router()
const isAuthenticated  = require('../middleware/auth')
const {
    getUser,
    getById,
    register,
    login,
    update,
    switchToAdmin,
    deleteById,
} 
=require('../controller/userController')


router.get('/getuser', getUser)
router.get('/getById/:ID', getById)
router.post('/register', register)
router.post('/login', login)
router.put('/update/:ID',isAuthenticated(['admin']),  update)
router.put('/switchAdmin/:ID', isAuthenticated(['admin']), switchToAdmin)
router.delete('/delete/:ID', isAuthenticated(['admin']), deleteById)
module.exports = router
