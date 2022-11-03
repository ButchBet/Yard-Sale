import React from "react";
import Layout from "@containers/Layout";
import Login from "@containers/Login";
import RecoverPassword from "@containers/RecoverPassword";
import EmailSent from "@containers/EmailSent";
import CreatePassword from "@containers/CreatePassword";
import CreateAccount from "@containers/CreateAccount";
import MyAccount from "@containers/MyAccount";
import MyOrder from "@containers/MyOrder";
import MyOrders from "@containers/MyOrders";
import "@styles/style.css";


const App = () => {
    return (
        <Layout>
            <MyOrders />
        </Layout>
    );
}

export default App;
