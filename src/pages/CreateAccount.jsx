import React from "react";
import "@styles/createAccount.css";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";

const CreateAccount = () => {
    return(
      <div className="createAccount">
        <div className="fromContainer">
          <h1 className="fromContainer__title">Create account</h1>
          
          <form action="/" className="fromCotainer__form">
            <div>
              <label htmlFor="name" className="label">Name</label>
             
              <input type="text" id="name" placeholder="Yard Sale" className="input input-name" />
             
              <label htmlFor="email" className="label">Email address</label>
             
              <input type="email" id="email" placeholder="yardsale@gmail.com" className="input input-email" />
             
              <label htmlFor="password" className="label">Password</label>
             
              <input type="password" id="password" placeholder="*********" className="input input-password" />
            </div>
            
            <input type="submit" value="Create" className="primary-button create-button" />
          </form>
        </div>
      </div>
    )
}

export default CreateAccount;