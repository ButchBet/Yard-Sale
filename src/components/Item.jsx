import React from "react";
import "@styles/item.css";
import cartIcon from "@images/icons/bt_add_to_cart.svg";
import addedCartIcon from "@images/icons/bt_added_to_cart.svg";

const Item = () => {
    const [cart, setCart] = React.useState(false);

    const handleCartClick = () => {
        setCart(!cart);
    }
    return(
        <div className="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="product" className="product-img" />
                        
            <div className="product-info">
                <div className="product-details">
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                
                <div className="product-icon">
                    <figure onClick={handleCartClick}>
                        <img src={!cart ? cartIcon : addedCartIcon} alt="Add to card icon" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Item;