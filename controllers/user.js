const user = require("../models/user")

class User {

    async add(req, res, next) {

        console.log("commin")
        const userData = req.body

        try {
            const data = await user.create(userData)
            res.status(201).json({
                success: true,
                data
            })
        } catch (err) {
            res.status(201).json({
                success: true,
                err : err.message
            })
        }
    }
}

module.exports = new User()