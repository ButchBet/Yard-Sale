import React from "react";
import DesktopMenu from "@components/DesktopMenu";
import MobileMenu from "@components/MobileMenu";
import ShoppingCart from "@containers/ShoppingCart";

import "@styles/header.css";

import shoppingCart from "@images/icons/icon_shopping_cart.svg";
import downArrow from "@images//icons/flechita.svg";
import yardSaleLogo from "@images/logos/logo_yard_sale.svg"
import menuIcon from "@images/icons/icon_menu.svg";

import AppContext from "@context/AppContext";


const Header = () => {
	const {state} = React.useContext(AppContext);
	
	const [shopping, setShopping] = React.useState(false);

    const [menu, setMenu] = React.useState(false);

    const handleMenuClick = () => {
        setMenu(!menu);
		setShopping(false);
    }

	const handleCartClick = () => {
		setShopping(!shopping);
        setMenu(false);
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
					<li onClick={handleMenuClick} className="navbar-email">
                        yardsale@gmail.com
                    </li>
					
                    <li className="navbar-shopping-cart" onClick={handleCartClick}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>

            {menu ? <div className="menuContainer"><DesktopMenu /> <MobileMenu /></div> : shopping ? <div className="shoppingCartContainer"><ShoppingCart /></div> : "" }
		</nav>
    )
}

export default Header;