require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectedDB = require("./config/config");
const userRouter = require("./routes/userRoute");
const faqRouter = require("./routes/faqRoute");
const therapyRouter = require("./routes/therapyRoute");
const appointmentRouter = require("./routes/appointmentRoute");
const feedBackRouter = require("./routes/feedBackRoute");
const blogRouter = require("./routes/blogRoute");
const app = express();
const server = http.createServer(app);
// const socketIO = socketIo(server, {
//     cors: {
//       origin: "https://psychecraftery.onrender.com",
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST"],
//     },
//   });

// app.use(cors({
//   origin: "https://psychecraftery.onrender.com",
//  origin: "http://localhost:3000",
// }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRouter);
app.use("/api", therapyRouter);
app.use("/api", faqRouter);
app.use("/api", appointmentRouter);
app.use("/api", feedBackRouter);
app.use("/api", blogRouter);
// socketIO.on("connection", (socket) => {
//   console.log(`⚡: ${socket.id} user just connected!`);

//   socket.on("disconnect", () => {
//     console.log("🔥: A user disconnected");
//   });

//   socket.on("join_room", ({ room, userName, userType }) => {
//     socket.join(room);
//     socket.username = userName;
//     console.log(`User ${socket.id} joined room ${room}`);
//     socket.emit("message", `You joined room ${room}`);
//   });

//   socket.on("create_room", ({ room, therapistId }) => {
//     socket.join(room);
//     console.log(`Therapy ${therapistId} created and joined room ${room}`);
//     socket.emit("message", `You created and joined room ${room}`);
//   });

//   socket.emit("message", "Welcome to Chat App!");
//   socket.broadcast.emit(
//     "message",
//     `User ${socket.id.substring(0, 5)} connected`
//   );

//   socket.on("send_message", (data) => {
//     const messageData = {
//       authorID: data.authorID,
//       userType: data.userType,
//       message: data.message,
//       room: data.room,
//       time: new Date(Date.now()).toLocaleTimeString(),
//       userName: socket.username,
//     };

//     socket.broadcast.emit("receive_message", messageData);
//   });
// });

app.get("/", (_, res) => {
  res.send(`Hello World!`);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  connectedDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
