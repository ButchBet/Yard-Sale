import React from "react";
import "@styles/myAccount.css";

const MyAccount = () => {
    return(
        <div className="login">
        <div className="form-container">
            <h1 className="title">My account</h1>
            <form action="./login.html" className="form">
            <div>
                <label htmlFor="name" className="label">Name</label>
                <p className="value">Yard Sale</p>
                <label htmlFor="email" className="label">Email address</label>
                <p className="value">yardsale@gmail.com</p>
                <label htmlFor="password" className="label">Password</label>
                <p className="value">*********</p>
            </div>
            <input type="submit" value="Edit" className="secondary-button modify-button" />
            </form>
        </div>
        </div>
    )
}

export default MyAccount;