import React from "react";
import "@styles/createAccount.css";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg";

const CreateAccount = () => {
    const form = React.useRef(null);

    const handleSignUp = (e) => {
      e.preventDefault();

      const formData = new FormData(form.current);
      
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      }

      console.log(data);
    }
    return(
      <div className="createAccount">
        <div className="fromContainer">
          <h1 className="fromContainer__title">Create account</h1>
          
          <form action="/" className="fromCotainer__form" ref={form}>
            <div>
              <label htmlFor="name" className="label">Name</label>
             
              <input type="text" name="name" placeholder="Yard Sale" className="input input-name" />
             
              <label htmlFor="email" className="label">Email address</label>
             
              <input type="email" name="email" placeholder="yardsale@gmail.com" className="input input-email" />
             
              <label htmlFor="password" className="label">Password</label>
             
              <input type="password" name="password" placeholder="*********" className="input input-password" />
            </div>
            
            <input type="submit" value="Create" className="primary-button create-button" onClick={handleSignUp} />
          </form>
        </div>
      </div>
    )
}

export default CreateAccount;