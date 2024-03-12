const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config()

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());


const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
