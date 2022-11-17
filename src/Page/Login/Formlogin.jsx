import React from "react";
import "./styleLogin.css";
import shoping from "./shoping.png"

const Login = () => {

    return(
        <React.Fragment>
            <img 
                alt=""
                src={shoping}
                maxwidth= "100%"
                width="700"
                height="500"
                className="d-inline-block align-center"
                />{" "}        
            <div className="container">
                <div className="box">
                    <div className="box-2">
                    <h2>Hello, Welcome</h2>
                    <form action="">
                        <input type="text" placeholder="input Email"/>
                        <input type="password" placeholder="input Password"/>
                        <select className="slct" name="" id="role" placeholder="select">
                            <option disabled hidden selected>select role</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </form>
                    <button>Login</button>
                    <br />
                    <br />
                    <a href="">Forgot password ?</a>
                    <br />
                    <br />
                    <hr />
                    <button className="btn">create new account</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login