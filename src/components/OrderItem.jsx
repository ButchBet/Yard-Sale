import React from "react";
import "@styles/orderItem.css";
import close from "@images/icons/icon_close.png";

const OrderItem = () => {
    return(
        <div className="item">
            <div className="item-image-name">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
                </figure>

                <p>Round shelf</p>
            </div>
            
            <div className="cost-close">
                <div className="total-cost">
                    <p>$ 600,00</p>
                </div>

                <div className="close-icon">
                    <img src={close} alt="Close icon" />
                </div>
            </div>
        </div>
    )
}

export default OrderItem;