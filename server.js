const express = require("express")
const app = express()
const mongoose = require("mongoose")
const uri = "mongodb+srv://bhaktisite-user:4mUWK6D5KEOTIBBe@cluster0.kwfpbxz.mongodb.net/?retryWrites=true&w=majority"
const emailApi = "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"
const Sib = require('sib-api-v3-sdk')


mongoose.connect(uri).then(()=> console.log("db connected")).catch(() => {
        console.log("db not connected")
    })

const schema = new mongoose.Schema(
    { name : String,
     number : String,
     address : String,
      satsaheb : String,
     geeta : String,
     ram : String}
    )
 const model = mongoose.model("user", schema)

const func = async ()  => {
    
    const data = { name : "vipin", number : "678834", address : "ram naaar", satsaheb : "satsaheb", geeta : "geeta", ram : "ram" }

    for (let i = 0; i < 1000; i++) {
        console.log("saving.......")
        const savedata = await model.create(data)
        console.log(`saved ${i}`)
    }

}

const emailSend = async () => {



const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = emailApi

const tranEmailApi = new Sib.TransactionalEmailsApi()

const sender = {
    email: 'vipindas@gmail.com',
    name: 'Anjan',
}

const receivers = [
    {
        email: "vipinsatlok@gmail.com",
    },
]

try {
    await tranEmailApi
    .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Subscribe to Cules Coding to become a developer',
        textContent: `
        Cules Coding will teach you how to become {{params.role}} a developer.
        `,
        htmlContent: `
        <h1>Cules Coding</h1>
        <a href="https://cules-coding.vercel.app/">Visit</a>
                `,
        params: {
            role: 'Frontend',
        },
    })
    console.log("email send")
} catch (err) {
    console.log(err)
}



}

const ram =async () => {

       await emailSend()
}
ram()


app.listen(3000, () => {
    console.log("connected")
})