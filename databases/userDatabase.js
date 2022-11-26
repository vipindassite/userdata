const mongoose = require("mongoose")

const connection = async () => {

    try {
        const data = await mongoose.connect(process.env.MONGO_USER)
        console.log(`userDatabase connected at port ${data.connection.port}`)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connection