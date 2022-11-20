import React from "react";
import AppContext from "@context/AppContext";
import "@styles/itemPanel.css";
import close from "@images/icons/icon_close.png";
import cartIcon from "@images/icons/bt_add_to_cart.svg";
import addedCartIcon from "@images/icons/bt_added_to_cart.svg";

const ItemPanel = ({item}) => {
    const {
            addToCart, 
            deleteFromCart,
            handleCartClickAdd,
            handleCartClickDelete,
            setItemPanel,
            setClickedItem,
            setShopping,
            setMenu
        } = React.useContext(AppContext)

        const [cart, setCart] = React.useState(false);
        const [added, setAdded] = React.useState('');

        const handleItemClick = () => {
            setItemPanel(false);
    
            setShopping(false);
            
            setMenu(false);

            setClickedItem({});
        }

    return(
        <section className="productPanel hidden" id="productPanel">
            <div className="close" id="close" onClick={handleItemClick}>
                <img src={close} alt="Close icon" />
            </div>

            <div className="product-image">
                <figure>
                    <img src={item.images[0]} alt="product" className="product-img" />
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
                        <p className="price">$ {item.price}</p>
                        
                        <p className="name">{item.title}</p>
                    </div>

                    <p className="description">{item.description}</p>
                </div>
                
                <button className={added} onClick={
                        !cart 
                            ? () => {
                                handleCartClickAdd(item, cart, setCart);

                                setAdded('selected');
                            } 
                            : () => {
                                handleCartClickDelete(item,  cart, setCart);

                                setAdded('');
                            }
                        } >

                    <img src={
                                !cart  
                                    ? cartIcon 
                                    : addedCartIcon
                                } alt="Add to card icon" />
                    <p>Add to cart</p>
                </button>
            </div>
        </section>
    )
}

export default ItemPanel;