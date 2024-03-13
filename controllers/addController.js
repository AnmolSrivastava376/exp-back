const dataModel = require('../models/dataModel')

const addController = async (req, res) => {
    try {
        const newData= new dataModel(req.body)
        console.log(req.body)
        await newData.save()
        res.status(201).json({
            success: true,
            newData
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }
}

module.exports = addController