const Sib = require('sib-api-v3-sdk')
const saveEmailData = require('./setEmailKey')

const emailSend = async (data) => {

    const emailKey = await saveEmailData(data.userid)

    const client = Sib.ApiClient.instance
    const apiKey = client.authentications['api-key']
    apiKey.apiKey = emailKey
    const tranEmailApi = new Sib.TransactionalEmailsApi()

    const sender = {
        email: 'vipinsatlok@gmail.com',
        name: 'Vipin Das',
    }

    const receivers = [{
        email: data.email
    }]

    try {
        await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'One Time Password',
            htmlContent: `<h1>Your OTP is...</h1>
                          <h1 style="font-size: 60px;">${data.otp}</h>`,
        })
        return true
    } catch (err) {
        return false
    }
}

module.exports = emailSend