import React from "react";
import "@styles/desktopMenu.css";

const DesktopMenu = () => {
    return(
        <div className="desktop-menu hidden" id="desktopMenu">
            <a href="my-orders" className="my-order">My orders</a>
            <ul>
                <li>
                </li>
                <li>
                    <a href="my-account" className="my-account">My account</a>
                </li>
                <li>
                    <a href="login" className="sign-out">Sing out</a>
                </li>
            </ul>
        </div>
    )
}

export default DesktopMenu;