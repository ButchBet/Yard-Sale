import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "@styles/style.css";

import Layout from "@containers/Layout";

import Home from "@pages/Home";
import Login from "@pages/Login";
import RecoverPassword from "@pages/RecoverPassword";
import EmailSent from "@pages/EmailSent";
import CreatePassword from "@pages/CreatePassword";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@pages/MyAccount";
import MyOrder from "@pages/MyOrder";
import MyOrders from "@pages/MyOrders";
import NotFound from "@pages/NotFound";

import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/create-account" component={CreateAccount} />
                            <Route excat path="/recover-password" component={RecoverPassword} />
                            <Route exact path="/email-sent" component={EmailSent} />
                            <Route exact path="/create-password" component={CreatePassword} />
                            <Route exact path="/my-account" component={MyAccount} />
                            <Route exact path="/my-order" component={MyOrder} />
                            <Route exact path="/my-orders" component={MyOrders} />
                            <Route path="*" component={NotFound} /> 
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
