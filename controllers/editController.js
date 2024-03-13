const mongoose = require("mongoose")

const editController = async (req,res) =>{
    try{
        const data = await mongoose.model('expense').find({_id: req.body.id})
        const filter = { _id: req.body.id}
        const updateDocument = {
            $set: {
                desc: req.body.desc,
                amount: req.body.amount,
                isIncome: req.body.isIncome
            }
        }
        const result = await mongoose.model('expense').updateOne(filter,updateDocument)
        res.status(200).json(result)
    }
    catch(e){
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = editController