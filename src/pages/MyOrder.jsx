import React from "react";
import Order from "@components/Order";
import OrderItem from "@components/OrderItem";
import "@styles/myOrder.css";

const MyOrder = () => {
    return(
        <section className="orders">
            <div className="title-container">
                <p className="title">My order</p>
            </div>
        
            <div className="items">
                <Order />

                <OrderItem />
            </div>
        </section>
    )
}

export default MyOrder;