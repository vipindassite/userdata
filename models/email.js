const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    date: {
        type : String,
        unique : true
    },
    emailkey1: [{
        userid: String
    }],
    emailkey2: [{
        userid: String
    }],
    emailkey3: [{
        userid: String
    }],
    emailkey4: [{
        userid: String
    }],
    emailkey5: [{
        userid: String
    }],
    emailkey6: [{
        userid: String
    }],
    emailkey7: [{
        userid: String
    }]
}, {
    timestamps: true
})

const model = mongoose.model("email", schema)
module.exports = model