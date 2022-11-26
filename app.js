const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

// database
const user = require("./databases/userDatabase")()

//routes
const userroute = require("./routes/user")
app.use("/api", userroute)

module.exports = app