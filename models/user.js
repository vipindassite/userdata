const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "fullname is required!"]
    },
    number: {
        type: Number,
        required: [true, "number is required!"]
    },
    email: {
        type: String,
        required: [true, "email is required!"],
        unique: [true, "email is already exist!"]
    },


    // for authentification
    otp: Number,
    tpassword: Number,
    activate: Boolean,
    status: {
        type: Boolean,
        default: false
    },
    modify: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const model = mongoose.model("user", schema)
module.exports = model