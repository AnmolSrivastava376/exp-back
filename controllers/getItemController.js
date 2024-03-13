const mongoose = require("mongoose")

const getItemController = async (req,res) =>{
    try{
        const data = await mongoose.model('expense').find({_id: req.body.id})
        res.status(200).json(data)
    }
    catch(e){
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = getItemController