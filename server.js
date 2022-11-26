const dotenv = require("dotenv").config()
const app = require("./app")
const port = process.env.PORT || 4000

app.listen(port, err => {
    err ? console.log(err.message) : 
    console.log(`server connnected at ${port}`)
})