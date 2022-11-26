const User = require("../controllers/user")

const router = require("express").Router()

router.get("/add", User.add)


module.exports = router