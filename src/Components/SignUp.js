import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom"
import { toast } from "react-toastify";

function SignUp(props) {
    //States
    const [signUpData, setSignUpData] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
    })
    const history = useHistory()

    //Functions
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setSignUpData((PreviousValues) => {
            return {
                ...PreviousValues,
                [name]: value
            }
        })
    }
    function handleSubmit() {
        if (!signUpData.userName || !signUpData.password || !signUpData.confirmPassword) {
            toast.error("Please fill all required fields")
        }
        else if (signUpData.password !== signUpData.confirmPassword) {
            toast.error("Password and Confirm Password don't match")
        }
        else {
            setSignUpData({
                userName: "",
                password: "",
                confirmPassword: ""
            })
            props.setAuthentication(true)
            history.replace("/home")
        }
    }

    return (
        <div className="loginSignUp">
            <h2 className="formTitle">SignUp</h2>

            <label>
                User Name<sup></sup>*
            </label>
            <input
                type="text"
                name="userName"
                placeholder="Enter UserName"
                maxLength={50}
                value={signUpData.userName}
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
                value={signUpData.password}
                onChange={(e) => handleChange(e)}
            />

            <label>
                Confirm Password<sup></sup>*
            </label>
            <input
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                maxLength={50}
                value={signUpData.confirmPassword}
                onChange={(e) => handleChange(e)}
            />

            <button className="loginSignUpSubmit" onClick={handleSubmit}>SignUp</button>
            <h4 className="loginSignUpBottomTip">Already have an account? Click to <NavLink to="/login">Login</NavLink></h4>
        </div>
    )
}

export default SignUp
