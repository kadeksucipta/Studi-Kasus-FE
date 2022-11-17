import React from "react";
import "./styleRegister.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "./logo.png"

const Register = () => {

    return(
        <React.Fragment>
            <div className="cntner">
                <div className="bx">
                    <div className="nav">
                    <img 
                    alt=""
                    src={logo}
                    maxwidth= "100%"
                    width="80"
                    height="60"
                    className="image"
                    />{" "}  
                    </div>
                    <h3>Let's Join !</h3>
                <form action="">
                    <input className="inpt" type="text" placeholder="Full Name"/>
                    <input className="inpt" type="text" placeholder="Email"/>
                    <input className="inpt" type="password" placeholder="Password"/>
                    <select className="role-input" name="" id="role" placeholder="select">
                        <option disabled hidden selected>select role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </form>
                    <button className="bttn">Let's Started</button>

                    <p>Copyright&copy; 2022 SuciptCreativeTeam all right reseverb</p>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Register;