const mongoose = require("mongoose")
const dotEnv = require("dotenv")
dotEnv.config()

const database = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Database connection is working")

    } catch (error){
        console.log("Database connection failed")

    }
}


module.exports = database