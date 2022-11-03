import React from "react";

const Login = () => {
    return(
        <div classname="login">
        <div classname="container">
            <img src="./assets/logos/logo_yard_sale.svg" alt="Yard logo" classname="logo" />
            <form action="./" classname="form">
            <label htmlfor="email" classname="label">Email address</label>
            <input type="email" id="email" classname="input input-password" placeholder="yardsale@example.com" />
            <label htmlfor="password" classname="label">Password</label>
            <input type="password" id="password" classname="input input-password" placeholder="*********" />
            <input type="submit" defaultvalue="Log in" classname="primary-button login-button" />
            </form>
            <a href="#" classname="issue">Forgot my password</a>
            <button classname="secondary-button signup-button">Sign up</button>
        </div>
        </div>
    );
}

export default Login;