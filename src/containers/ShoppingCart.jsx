import React from "react";
import OrderItem from "@components/OrderItem";
import "@styles/shoppingCart.css";
import arrowIcon from "@images/icons/flechita.svg";

const ShoppingCart = () => {
    return(
        <section className="shopping-cart" id="shoppingCart">
            <div className="title-container">
                <figure>
                    <img src={arrowIcon} alt="Arrow icon" />
                </figure>

                <p>Shopping cart</p>
            </div>
            
            <div className="items-total-checkout">
                <div className="items">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>

            <div className="total-checkout">
                <div className="total-and-cost">
                    <p>Total</p>
                    <p>$ 560,00</p>
                </div>
            
                <button>Checkout</button>
            </div>
        </section>
    )
}

export default ShoppingCart;