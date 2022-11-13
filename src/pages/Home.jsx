import React from "react";
import axios from "axios";
import Main from "@containers/Main";
import Items from "@containers/Items";
import Item from "@components/Item";
import DesktopMenu from "@components/DesktopMenu";
import MobileMenu from "@components/MobileMenu";
import ItemPanel from "@components/ItemPanel";
import ShoppingCart from "@containers/ShoppingCart";

const API = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(async () => {
        // const response = await axios(API);
        const response = await fetch(API);
       
        const data = await response.json();

        setItems(await data);
        }, []);

    return(
        <Main>
            <Items>
                {items.map((item) => {
                    return <Item />;
                })}
            </Items>

        </Main>
    )
}

export default Home;