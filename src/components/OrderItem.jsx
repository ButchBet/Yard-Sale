import React from "react";
import AppContext from "@context/AppContext";

import "@styles/orderItem.css";

import close from "@images/icons/icon_close.png";


const OrderItem = ({item}) => {
    const {deleteFromCart} = React.useContext(AppContext);

    const handleRemove = (deleteItem) => {
        deleteFromCart(deleteItem);
    }

    return(
        <div className="item">
            <div className="item-image-name">
                <figure>
                    <img src={item.images[0]} alt="Item image" />
                </figure>

                <p>{item.title}</p>
            </div>
            
            <div className="cost-close">
                <div className="total-cost">
                    <p>$ {item.price}</p>
                </div>

                {/* {item.type 
                    ? <div className="close-icon" onClick={() => handleRemove(item)}>
                        <img src={close} alt="Close icon" />
                     </div>
                    : null
                } */}

                <div className="close-icon" onClick={() => handleRemove(item)}>
                    <img src={close} alt="Close icon" />
                </div>
            </div>
        </div>
    )
}

export default OrderItem;