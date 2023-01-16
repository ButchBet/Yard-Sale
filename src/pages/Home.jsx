import React from "react";
import Main from "@containers/Main";
import Items from "@containers/Items";
import Item from "@components/Item";
import DesktopMenu from "@components/DesktopMenu";
import MobileMenu from "@components/MobileMenu";
import ItemPanel from "@components/ItemPanel";
import Header from "@components/Header";
import useGetItems from "@hooks/useGetItems";
import ShoppingCart from "@containers/ShoppingCart";
import AppContext from "@context/AppContext";


const API = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
    const {menu, shopping, itemsPanel, itemPanel, clickedItem} = React.useContext(AppContext)
    
    const items = useGetItems(API);

    return(
        <div>
            <Header />

            <Main>
                {
                    menu 
                        ? <div className="menuContainer"><DesktopMenu /> <MobileMenu /></div> 
                        : shopping 
                        ? <div className="shoppingCartContainer"><ShoppingCart /></div> 
                        : null 
                }

                {
                    itemsPanel
                        ? <Items>
                            {items.map((item) => {
                                return <Item key={`item-card-${item.id}`} item={item} />;
                            })}
                        </Items>
                        : null
                }

                {
                    itemPanel
                        ? <ItemPanel key={`item-panel-${clickedItem.id}`} item={clickedItem} />
                        : null
                }
            </Main>
        </div>
    )
}

export default Home;