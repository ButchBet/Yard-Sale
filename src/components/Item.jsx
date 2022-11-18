import React from "react";
import "@styles/item.css";
import cartIcon from "@images/icons/bt_add_to_cart.svg";
import addedCartIcon from "@images/icons/bt_added_to_cart.svg";
import AppContext from "@context/AppContext";

const Item = ({item}) => {
    const {state, addToCart, deleteFromCart} = React.useContext(AppContext);

    const [cart, setCart] = React.useState(false);

    const handleCartClickAdd = (addItem) => {
        setCart(!cart);
        addToCart(addItem);

        console.log(state);
    }

    const handleCartClickDelete = (deletedItem) => {
        setCart(!cart);
        deleteFromCart(deletedItem);

        console.log(state)
    }

    return(
        <div className="product-card">
            <img src={item.images[0]} alt={item.title} className="product-img" />
                        
            <div className="product-info">
                <div className="product-details">
                    <p>$ {item.price}</p>
                    <p>{item.title}</p>
                </div>
                
                <div className="product-icon">
                    <figure onClick={!cart ? () => handleCartClickAdd(item) : () => handleCartClickDelete(item)}>
                        <img src={!cart ? cartIcon : addedCartIcon} alt="Add to card icon" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Item;