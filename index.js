const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors');
const connectDB = require('./config/connectDb')
dotenv.config()
connectDB()
const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());


const PORT = 5000 || process.env.PORT;
app.use('/api/v1', require('./routes/dataRoutes'))
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
