import React from "react";
import "@styles/login.css";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";

const Login = () => {
    const form = React.useRef(null);

    const handleLogIn = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }

        console.log(data);
    }

    const handleSignUp = (e) => {
        document.location.pathname = "/create-account";
    }
    return(
        <div className="login">
            <div className="container">
                {/* <img src={yardSaleLogo} alt="Yard logo" className="logo" /> */}
                <form action="./" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    
                    <input type="email" name="email" className="input input-password" placeholder="yardsale@example.com" />
                    
                    <label htmlFor="password" className="label">Password</label>
                    
                    <input type="password" name="password" className="input input-password" placeholder="*********" />
                    
                    <input type="submit" value="Log in" className="primary-button login-button" onClick={handleLogIn} />
                </form>

                <a href="/recover-password" className="issue">Forgot my password</a>
                
                <button className="secondary-button signup-button" onClick={handleSignUp}>Sign up</button>
            </div>
        </div>

    );
}

export default Login;