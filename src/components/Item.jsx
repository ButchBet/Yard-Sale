import React from "react";
import "@styles/item.css";
import cartIcon from "@images/icons/bt_add_to_cart.svg";
import addedCartIcon from "@images/icons/bt_added_to_cart.svg";
import AppContext from "@context/AppContext";

const Item = ({item}) => {
    const {
            state, 
            addToCart, 
            deleteFromCart, 
            setItemPanel, 
            setClickedItem,
            handleCartClickAdd,
            handleCartClickDelete
        } = React.useContext(AppContext);

    const [cart, setCart] = React.useState(false);

    const handleItemClick = (item) => {
        setItemPanel(true);

        setClickedItem(item);
    }

    return(
        <div className="product-card">
            <img src={item.images[0]} alt={item.title} className="product-img" onClick={() => handleItemClick(item)} />
                        
            <div className="product-info">
                <div className="product-details" onClick={() => handleItemClick(item)}>
                    <p>$ {item.price}</p>
                    <p>{item.title}</p>
                </div>
                
                <div className="product-icon">
                    <figure onClick={
                        !cart 
                            ? () => handleCartClickAdd(item, cart, setCart) 
                            : () => handleCartClickDelete(item,  cart, setCart)
                        } >

                        <img src={
                                !cart  
                                    ? cartIcon 
                                    : addedCartIcon
                                } alt="Add to card icon" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Item;