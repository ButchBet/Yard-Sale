import React from "react";
import "@styles/itemPanel.css";
import close from "@images/icons/icon_close.png";
import shopppingCart from "@images/icons/icon_shopping_cart.svg";

const ItemPanel = () => {
    return(
        <section className="productPanel hidden" id="productPanel">
            <div className="close" id="close">
                <img src={close} alt="Close icon" />
            </div>

            <div className="product-image">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="product" className="product-img" />
                </figure>

                <ul className="change-image">
                    <li className="choosed-image" />
                    <li className="" />
                    <li className="" />
                </ul>
            </div>

            <div className="product-information">
                <div className="price-name-description">

                    <div className="name-price">
                        <p className="price">$ 120,00</p>
                        
                        <p className="name">Retro refrigerator</p>
                    </div>

                    <p className="description">With its functional and practical interior, this refrigerator also fulfills a decorative function, adding presonality and a retro-vintage desthtic to your kitchen or workplacee</p>
                </div>
                
                <button>
                    <img src={shopppingCart} alt="Add to cart icon" />
                    <p>Add to cart</p>
                </button>
            </div>
        </section>
    )
}

export default ItemPanel;