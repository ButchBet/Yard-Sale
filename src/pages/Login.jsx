import React from "react";
import "@styles/login.css";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";

const Login = () => {
    return(
        <div className="login">
            <div className="container">
                {/* <img src={yardSaleLogo} alt="Yard logo" className="logo" /> */}
                <form action="./" className="form">
                    <label htmlFor="email" className="label">Email address</label>
                    
                    <input type="email" id="email" className="input input-password" placeholder="yardsale@example.com" />
                    
                    <label htmlFor="password" className="label">Password</label>
                    
                    <input type="password" id="password" className="input input-password" placeholder="*********" />
                    
                    <input type="submit" value="Log in" className="primary-button login-button" />
                </form>

                <a href="#" className="issue">Forgot my password</a>
                
                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>

    );
}

export default Login;