require('dotenv').config();
const express = require('express');
// socket
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
// connect to data base
const connectedDB = require('./config/config');
// apis 
const userRouter = require('./routes/userRoute');
const faqRouter = require('./routes/faqRoute');
const therapyRouter = require('./routes/therapyRoute');
const appointmentRouter = require('./routes/appointmentRoute');
const feedBackRouter = require('./routes/feedBackRoute')
const app = express();
const server = http.createServer(app);

const socketIO = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(bodyParser.json());

// apis
app.use('/api', userRouter);
app.use('/api', therapyRouter);
app.use('/api', faqRouter);
app.use('/api', appointmentRouter);
app.use('/api', feedBackRouter)
// Server-side code
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    socket.on('join_room', ({ room }) => {
        // Patients can join existing rooms
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
        socket.emit('message', `You joined room ${room}`);
    });

    socket.on('create_room', ({ room, therapistId }) => {
        // Therapists can create and join new rooms
        socket.join(room);
        console.log(`Therapist ${therapistId} created and joined room ${room}`);
        socket.emit('message', `You created and joined room ${room}`);
    });

    socket.emit('message', "Welcome to Chat App!");

    socket.broadcast.emit('message', `User ${socket.id.substring(0, 5)}} connected`);

    socket.on("send_message", (data) => {
        // console.log(data)
        socket.broadcast.emit("receive_message", data);
      });
});



app.get('/', (_, res) => {
    res.send(`Hello World!`);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, (error) => {
    if (error) {
        console.log(`Error in setup: ${error}`);
    } else {
        connectedDB();
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});
