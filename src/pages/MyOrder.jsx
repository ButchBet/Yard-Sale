import React from "react";
import "@styles/myOrder.css";

const MyOrder = () => {
    return(
        <section className="orders">
        <div className="title-container">
            <p className="title">My order</p>
        </div>
        <div className="items">
            <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            <div className="total-cost">
                <p>$ 600,00</p>
            </div>
            </div>
            <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
            </div> 
            <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
            </div>  
            <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
            </div>    
            <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
            </div>    
            <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
            </div> 
            <div className="item">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Item image" />
            <div>
                <p>Round shell</p>
                <p>$120,00</p>
            </div>
            </div>                      
        </div>
        </section>
    )
}

export default MyOrder;