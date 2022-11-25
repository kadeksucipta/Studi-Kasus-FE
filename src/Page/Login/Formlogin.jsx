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
                width="800"
                height="600"
                className="img-login"
                />{" "}        
            <div className="container">
                <div className="box">
                    <div className="box-2">
                    <h2 className="judul">Hello, Welcome</h2>
                    <form action="">
                        <input className="form-login" type="text" placeholder="input Email"/>
                        <input className="form-login" type="password" placeholder="input Password"/>
                        <select className="slct" name="" id="role" placeholder="select">
                            <option disabled hidden selected>select role</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </form>
                    <button className="login">Login</button>
                    <br />
                    <br />
                    <a className="link" href="">Forgot password ?</a>
                    <br />
                    <br />
                    <hr className="line" />
                    <button className="register">create new account</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login