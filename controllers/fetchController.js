const mongoose = require("mongoose")

const fetchController = async (req,res) =>{
    try{
        const data = await mongoose.model('expense').find({})
        res.status(200).json(data)
    }
    catch(e){
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = fetchController