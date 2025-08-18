require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
console.log('MONGO_URI from .env:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});