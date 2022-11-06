import React from "react";
import "@styles/order.css";
import rowIcon from "@images/icons/flechita.svg";

const Order = () => {
    return(
        <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            
            <div className="cost-arrow">
                <div className="total-cost">
                    <p>$ 600,00</p>
                </div>
            
                <div className="arrow-icon">
                    <img src={rowIcon} alt="Row icon" />
                </div>
            </div>
        </div>
    )
}

export default Order;