import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

function NavBar(props) {   
    const Autentication = props.authentication

//Functions
    function handleLogout() {
        props.setAuthentication(false)
    }
    function handleClick() {
       window.scrollTo({
        top: 0,
        behavior:'smooth',
      });
    }
    
    return (
        <div className="navBar">
            <ul className="navList">
                {Autentication ? (<>
                    <li className="navItem" onClick={handleClick}><NavLink  to="/home">Home</NavLink></li>
                    <li className="navItem" onClick={handleLogout}><NavLink to="/login" >Logout</NavLink></li>
                </>
                ) : (<>
                    <li  className="navItem"><NavLink  to="/">Sign Up</NavLink></li>
                    <li  className="navItem"><NavLink  to="/login">Login</NavLink></li>
                </>)}

            </ul>
        </div>
    )
}

export default NavBar
