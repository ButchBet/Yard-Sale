import React from "react";
import "@styles/header.css";
import shoppingCart from "@images/icons/icon_shopping_cart_notification.svg";
import downArrow from "@images//icons/flechita.svg";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg"
import menuIcon from "@images/icons/icon_menu.svg";

const Header = () => {
    return(
        <nav className="navHeader">
            <div className="left">
                <figure className="bar">
                    <img src={menuIcon} alt="Bar icon" />
                </figure>

                <figure className="">
                    <img src={yardSaleLogo} alt="Yard Sale logo" />
                </figure>

                <ul className="categories">
                    <li>
                        <a className="selected" href="/">All</a>
                    </li>
                    <li>
                        <a className href="/">Clothes</a>
                    </li>
                    <li>
                        <a className href="/">Electronics</a>
                    </li>
                    <li>
                        <a className href="/">Furniture</a>
                    </li>
                    <li>
                        <a className href="/">Toys</a>
                    </li>
                    <li>
                        <a className href="/">Others</a>
                    </li>
                </ul>
                
                <figure className="shopping-cart-left">
                    <img src={shoppingCart} alt="shopping cart icon" />
                    <div className="number-of-items">2</div>
                </figure>
            </div>
            <div className="right">
                <ul className="account">
                    <li>
                        <a href="/">yardsale@gmail.com</a>
                    </li>
                    <li>
                        <img src={downArrow} alt="Down arrow icon" />
                    </li>
                </ul>

                <figure className="shopping-cart-right">
                    <img src={shoppingCart} alt="shopping cart icon" />    
                    <div className="number-of-items">2</div>
                </figure>
            </div>
        </nav>

    )
}

export default Header;