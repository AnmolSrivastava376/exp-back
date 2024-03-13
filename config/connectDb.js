const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://anmolsrivastava:anmol123@mydatabase.ejnwb8l.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase/expenses")
        console.log(`Server running on ${mongoose.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDb