import React from "react";
import Main from "@containers/Main";
import Items from "@containers/Items";
import Item from "@components/Item";
import ItemPanel from "@components/ItemPanel";
import Header from "@components/Header";
import useGetItems from "@hooks/useGetItems";
import AppContext from "@context/AppContext";


const API = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
    const {menu,
           shopping, 
           itemsPanel, 
           itemPanel, 
           clickedItem} = React.useContext(AppContext)
    
    const items = useGetItems(API);

    return(
        <div>
            <Header />

            <Main>
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