import React from "react";
import "@styles/mobileMenu.css";
import close from "@images/icons/icon_close.png";

const MobileMenu = () => {
    return(
       <div className="menu-mobile hidden" id="mobileMenu">
        {/* <div className="exit menu">
            <img src={close} alt />
        </div> */}

        <p className="title">CATEGORIES</p>

        <ul className="category-items">
            <li>
                <a href="/">All</a>
            </li>

            <li>
                <a href="/">Clothes</a>
            </li>

            <li>
                <a href="/">Electronics</a>
            </li>

            <li>
                <a href="/">Furnitures</a>
            </li>

            <li>
                <a href="/">Toys</a>
            </li>

            <li>
                <a href="/">Others</a>
            </li>
        </ul>

        <ul className="category-account">
            <li>
                <a href="./my-orders.html">My orders</a>
            </li>
        
            <li>
                <a href="./my-account.html">My account</a>
            </li>

            <li>
                <a href="./my-account.html" className="email" id="emailMobileMenu">yardsale@gmail.com</a>
            </li>

            <li>
                <a href="./login.html" className="sing-out">sign out</a>
            </li>
        </ul>
    </div>

    )
}

export default MobileMenu;