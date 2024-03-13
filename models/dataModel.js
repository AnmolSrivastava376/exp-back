const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema(
    {
        desc: { type: String},
        amount: { type: Number},
        isIncome: { type: Boolean},
    },
    { timestamps: true },
)

const userModel = mongoose.model('expense', DataSchema)
module.exports = userModel