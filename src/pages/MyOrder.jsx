import React from "react";
import Order from "@components/Order";
import Header from "@components/Header";
import OrderItem from "@components/OrderItem";
import "@styles/myOrder.css";

const MyOrder = () => {
    const item = {
        id: "1",
        title: "Root",
        images: [
            "data:image/jpeg;base64,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"
        ],
        price: 10,
        type: true
    }

    return(
        <div>
            <Header />

            <section className="orders">
                <div className="title-container">
                    <p className="title">My order</p>
                </div>
            
                <div className="items">
                    <Order />

                    <OrderItem item={item} type="false" />
                </div>
            </section>
        </div>
    )
}

export default MyOrder;