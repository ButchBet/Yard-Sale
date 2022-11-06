import React from "react";
import "@styles/emailSent.css"
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";
import emailIcon from "@images/icons/email.svg";

const EmailSent = () => {
    return(
        <div className="login">
            <div className="container">
                {/* <img src={yardSaleLogo} alt="Yard logo" className="logo" /> */}
                <h1 className="title">Email has been sent!</h1>
                
                <p className="sub-title">Please check your inbox for instructions on how to reset the password </p>
                
                <div className="email-icon-container">
                    <img src={emailIcon} alt="email icon" className="email-icon" />
                </div>
                
                <button className="primary-button login-button">Login</button>
                
                <p className="issue">Didn´t receive the email? <a href="#">Resend</a></p>
            </div>
        </div>
    );
}

export default EmailSent;