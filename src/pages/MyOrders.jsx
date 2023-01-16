import React from "react";
import Header from "@components/Header";
import Order from "@components/Order";
import "@styles/myOrders.css";

const MyOrders = () => {
    return(
        <div>
            <Header />

            <section className="order">
                <div className="title-container">
                    <p className="title">My orders</p>
                </div>

                <div className="items">
                <Order /> 

                <Order />    
                
                <Order />    
                
                <Order />    
                
                <Order />    
                
                </div>
            </section>
        </div>

    )
}

export default MyOrders;