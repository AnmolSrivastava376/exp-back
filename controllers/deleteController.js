const mongoose = require('mongoose')

const deleteController = async (req,res) => {
    try{
        console.log(req.body.id)
        const data = await mongoose.model('expense').findOneAndDelete({_id: req.body.id})
        res.status(200).json("Deleted")
    }
    catch(e){
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = deleteController