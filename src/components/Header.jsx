import React from "react";
import "@styles/header.css";
import shoppingCart from "@images/icons/icon_shopping_cart_notification.svg";
import downArrow from "@images//icons/flechita.svg";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg"
import menuIcon from "@images/icons/icon_menu.svg";

const Header = () => {
    const [menu, setMenu] = React.useState(false);

    const handleMenuClick = () => {
        setMenu(!menu);
    }

    return(
        <nav>
			<img onClick={handleMenuClick} src={menuIcon} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={yardSaleLogo} alt="logo" className="logo" />
				<ul>
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
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">yardsale@gmail.com</li>
					
                    <li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
    )
}

export default Header;