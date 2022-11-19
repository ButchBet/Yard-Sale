import React from "react";
import OrderItem from "@components/OrderItem";

import AppContext from "@context/AppContext";

import "@styles/shoppingCart.css";
import arrowIcon from "@images/icons/flechita.svg";

const ShoppingCart = () => {
    const {state, setState, finalCost} = React.useContext(AppContext);

    return(
        <section className="shopping-cart" id="shoppingCart">
            <div className="title-container">
                {/* <figure>
                    <img src={arrowIcon} alt="Arrow icon" />
                </figure> */}

                <p>Shopping cart</p>
            </div>
            
            <div className="items-total-checkout">
                <div className="items">
                    {state.cart.map((item) => {
                        return <OrderItem key={item.id} item={item}/>
                    })}
                </div>
            </div>

            <div className="total-checkout">
                <div className="total-and-cost">
                    <p>Total</p>
                    <p>$ {finalCost()}</p>
                </div>
            
                <button>Checkout</button>
            </div>
        </section>
    )
}

export default ShoppingCart;