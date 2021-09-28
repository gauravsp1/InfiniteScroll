import React, { useState } from 'react'
import { NavLink,useHistory } from "react-router-dom"
import { toast } from "react-toastify";

function Login(props) {
    //States
    const [loginData, setLoginData] = useState({
        userName: "",
        password: ""
    })

const history=useHistory()

//Functions
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setLoginData((PreviousValues) => {
            return {
                ...PreviousValues,
                [name]: value
            }
        })
    }
    function handleSubmit() {
        if (!loginData.userName || !loginData.password) {
            toast.error("Please fill all required fields")
        }

        else {
            history.replace("/home")
            setLoginData({
                userName: "",
                password: ""
            })
            props.setAuthentication(true)
        }
    }
    
    return (
        <div className="loginSignUp">
            <h2 className="formTitle">Login</h2>
            <label>
                User Name<sup></sup>*
            </label>
            <input
                type="text"
                name="userName"
                placeholder="Enter UserName"
                maxLength={50}
                value={loginData.userName}
                onChange={(e) => handleChange(e)}
            />
            <label>
                Password<sup></sup>*
            </label>
            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                maxLength={50}
                value={loginData.password}
                onChange={(e) => handleChange(e)}
            />
            <button className="loginSignUpSubmit" onClick={handleSubmit}>Login</button>
            <h4 className="loginSignUpBottomTip">Don't have an account? Click to <NavLink to="/">Sign Up</NavLink></h4>
        </div>
    )
}

export default Login
