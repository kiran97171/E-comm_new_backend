const mongoose = require("mongoose")

const url = "mongodb+srv://kiran:kiran@cluster0.qa8nika.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const client = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to DataBase")
        return client
    }
    catch (err) {
        console.log(`Error in connecting with database ${err}`)
    }
}

module.exports = connectDB