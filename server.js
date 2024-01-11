require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT
const cors =require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

// connect to database
const connectedDB = require('./config/config')
const userRouter = require('./routes/userRoute')
const faqRouter = require('./routes/faqRoute');
const therapyRouter = require('./routes/therapyRoute')
const appointmentRouter = require('./routes/appointmentRoute')



app.use('/api', userRouter)
app.use('/api', therapyRouter)
app.use('/api', faqRouter )
app.use('/api', appointmentRouter)


app.get('/', (_, res) => {
    res.send(`Hello World!`)
})

app.listen(PORT , function(error){
    if (error) console.log(`error in setup`)
    connectedDB()
    console.log(`server is running on http://localhost:${PORT}`)
})
