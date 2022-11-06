import React from "react";
import "@styles/orderItem.css";

const OrderItem = () => {
    return(
        <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
        </div>
    )
}

export default OrderItem;