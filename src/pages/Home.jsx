import React from "react";
import Main from "@containers/Main";
import Items from "@containers/Items";
import Item from "@components/Item";
import DesktopMenu from "@components/DesktopMenu";
import MobileMenu from "@components/MobileMenu";
import ItemPanel from "@components/ItemPanel";
import useGetItems from "@hooks/useGetItems";
import ShoppingCart from "@containers/ShoppingCart";
// import AppContext from "@context/AppContext";

const API = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
    // const {useGetItems} = React.useContext(AppContext)
    const items = useGetItems(API);
    return(
        <Main>
            <Items>
                {items.map((item) => {
                    return <Item key={`item-card-${item.id}`} item={item} />;
                })}
            </Items>
        </Main>
    )
}

export default Home;