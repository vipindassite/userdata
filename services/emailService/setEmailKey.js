const EmailModel = require("../../models/email")
const dateFormatter = require("../dateFormatter")

const emailKeys = {
    emailkey1: process.env.EMAIL_KEY1,
    emailkey2: process.env.EMAIL_KEY2,
    emailkey3: process.env.EMAIL_KEY3,
    emailkey4: process.env.EMAIL_KEY4,
    emailkey5: process.env.EMAIL_KEY5,
    emailkey6: process.env.EMAIL_KEY6,
    emailkey7: process.env.EMAIL_KEY7,
}

const saveEmailData = async (userid) => {

    let data
    let email

    const date = dateFormatter.now()

    // find is today exist
    data = await EmailModel.findOne({
        date
    })

    //if not exist
    if (!data) {
        data = await EmailModel.create({
            date,
            emailkey1: [{
                userid
            }]
        })

        email = "emailkey1"
    } else {

        //if exist
        const keys = Object.keys(data._doc)
        const keysLength = keys.length - 5

        loop : for (let i = 0; i < keysLength; i++) {

            const dynamikKey = `emailkey${i+1}`
            data[dynamikKey] ? true : false

            if (data[dynamikKey].length < 300) {
                data[dynamikKey].push({
                    userid
                })

                await data.save()
                email = dynamikKey
                break loop
            }
        }
    }

    return emailKeys[email]
}

module.exports = saveEmailData