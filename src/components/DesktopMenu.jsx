import React from "react";
import "@styles/desktopMenu.css";

const DesktopMenu = () => {
    return(
        <div className="desktop-menu hidden" id="desktopMenu">
            <ul>
                <li>
                    <a href="./my-orders.html" className="my-order">My orders</a>
                </li>
                <li>
                    <a href="./my-account.html" className="my-account">My account</a>
                </li>
                <li>
                    <a href="./login.html" className="sign-out">Sing out</a>
                </li>
            </ul>
        </div>
    )
}

export default DesktopMenu;