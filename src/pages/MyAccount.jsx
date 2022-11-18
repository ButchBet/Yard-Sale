import React from "react";
import "@styles/myAccount.css";

const MyAccount = () => {
    const form = React.useRef(null);
    
    const name = React.useRef(null);

    const email = React.useRef(null);

    const password = React.useRef(null);

    const [validation, setValidation] = React.useState(false);

    const handleMyAccount = (e) => {
        e.preventDefault();

        console.log(form.current)
        
        // if(validation) {
        //     name.current.localName = 'INPUT';
        //     email.current.localName = 'INPUT';
        //     password.current.localName = 'INPUT';
        // } else {
        //     name.current.localName = 'P';
        //     email.current.localName = 'P';
        //     password.current.localName = 'P';
        // }
        
        setValidation(!validation);
    }
    return(
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>
                
                <form action="./login" className="form" ref={form}>
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <p className="value" name="name" ref={name}>Yard Sale</p>
                        <label htmlFor="email" className="label">Email address</label>
                        <p className="value" name="email" ref={email}>yardsale@gmail.com</p>
                        <label htmlFor="password" className="label">Password</label>
                        <p className="value" name="password" ref={password}>*********</p>
                    </div>
                    
                    <input type="submit" value="Edit" className="secondary-button modify-button" onClick={handleMyAccount} />
                </form>
            </div>
        </div>
    )
}

export default MyAccount;