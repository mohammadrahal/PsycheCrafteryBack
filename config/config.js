const mongoose = require('mongoose')
const MONGOBD_URL = process.env.MONGOBD_URL

// connection to database
async function connectedDB(){
    try {
        await mongoose.connect(MONGOBD_URL)
        console.log('connected to database')
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = connectedDB