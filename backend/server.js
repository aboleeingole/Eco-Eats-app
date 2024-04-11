// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/config');
const authController = require('./controllers/userController');

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// Registration endpoint
app.post("/", authController.registerUser);

// Login endpoint
app.post("/login", authController.loginUser);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});