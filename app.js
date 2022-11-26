const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const option = {
    origin : ["https://vipindassite-curly-winner-66vxjvwprgjc54r6-3000.preview.app.github.dev/"]
}

app.use(cors(option))
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