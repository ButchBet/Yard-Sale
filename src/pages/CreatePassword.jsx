import React from "react";
import "@styles/createPassword.css"
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";

const CreatePassword = () => {
    return(
        <div className="login">
        <div className="form-container">
            <img src={yardSaleLogo} alt="Yard logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="sub-title">Enter a new password for you account</p>
            <form action="/" className="form">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
            <label htmlFor="new-password" className="label">Re-enter password</label>
            <input type="password" id="new-password" placeholder="*********" className="input input-password" />
            <input type="submit" value="Confirm" className="primary-button login-button" />
            </form>
        </div>
        </div>
    );
}

export default CreatePassword;