import { useState } from 'react';
import Button from '../../componant/Form/Button';
import Error from '../../componant/Form/Error';
import Input from '../../componant/Form/Input';
import "./login.scss"
import axios from "axios"

const Login = () => {




    const submitForm = async (e) => {
        e.preventDefault()

        try {

            const options = {
                mode: 'cors', headers: { 'Content-Type': 'application/json' }
            }
            const setData = { name: "vipin", number: 6783432, email: "vipinsatlok@gmail.com" }

            const api = axios.create({
                baseURL: "https://vipindassite-curly-winner-66vxjvwprgjc54r6-5000.preview.app.github.dev",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            })

            const link = "https://text-sevasite.herokuapp.com/api/add"
            const { data } = await axios.get(link)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="login-page">
            <form className="form">
                <div className="input-box">
                    <h1 className="heading">Welcome to Login Page</h1>
                </div>
                <Error text="This is Error" />
                <Input type="number" placeholder="Enter Your Number" />
                <Input type="number" placeholder="Enter Your Number" />
                <Input type="number" placeholder="Enter Your Number" />
                <Input type="number" placeholder="Enter Your Number" />
                <Input type="number" placeholder="Enter Your Number" />
                <Button func={submitForm} value="Login" />
            </form>
        </div>
    )
}


export default Login