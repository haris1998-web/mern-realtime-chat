const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute')
const chatRoute = require('./Routes/chatRoute')
const messageRoute = require('./Routes/messageRoute')

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get('/', (req, res) => {
    res.send("Welcome to the chat app APIs..")
})

const port = process.env.PORT || 5001;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`listening on port: ${port}`);
});

mongoose.connect(uri).then(() => {
    console.log('MongoDB connection established')
}).catch(err => {
    console.log('MongoDB connection failed: ', err.message)
})