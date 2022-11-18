import React from "react";
import "@styles/recoverPassword.css";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";

const RecoverPassword = () => {
    const form = React.useRef(null);

    const handleRecoverPassword = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const data = {
            email: formData.get('email')
        }

        console.log(data);
    }
    return(
        <div className="login">
            <div className="container">
                {/* <img src={yardSaleLogo} alt="Yard logo" className="logo" /> */}
                <h1 className="title">Password recovery</h1>
                
                <p className="sub-title">Inform the email address used <br /> to create the account</p>
                
                <form action="./" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="email" name="email" className="input input-password" placeholder="yardsale@example.com" />
                    <input type="submit" value="Submit" className="primary-button login-button" onClick={handleRecoverPassword} />
                </form>
                
                <a href="/login" className="issue">Back to log in</a>
            </div>
        </div>
    );
}

export default RecoverPassword;