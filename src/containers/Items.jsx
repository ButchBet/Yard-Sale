import React from "react";
import "@styles/items.css";

const Items = ({children}) => {
    return(
        <section className="main-container" id="products">
            <div className="cards-container">
                {children}
            </div>
        </section>
    )
}

export default Items;