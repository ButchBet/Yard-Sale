import React from "react";
import "@styles/myOrders.css";
import rowIcon from "@images/icons/flechita.svg";

const MyOrders = () => {
    return(
        <section className="order">
        <div className="title-container">
            <p className="title">My orders</p>
        </div>
        <div className="items">
            <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            <div className="cost-arrow">
                <div className="total-cost">
                <p>$ 600,00</p>
                </div>
                <div className="arrow-icon">
                <img src={rowIcon} alt="Row icon" />
                </div>
            </div>
            </div>
            <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            <div className="cost-arrow">
                <div className="total-cost">
                <p>$ 600,00</p>
                </div>
                <div className="arrow-icon">
                <img src={rowIcon} alt="Row icon" />
                </div>
            </div>
            </div>
            <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            <div className="cost-arrow">
                <div className="total-cost">
                <p>$ 600,00</p>
                </div>
                <div className="arrow-icon">
                <img src={rowIcon} alt="Row icon" />
                </div>
            </div>
            </div>
            <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            <div className="cost-arrow">
                <div className="total-cost">
                <p>$ 600,00</p>
                </div>
                <div className="arrow-icon">
                <img src={rowIcon} alt="Row icon" />
                </div>
            </div>
            </div>
            <div className="total-info">
            <div className="data-articles">
                <p>04.25.2021</p>
                <p>6 articles</p>
            </div>
            <div className="cost-arrow">
                <div className="total-cost">
                <p>$ 600,00</p>
                </div>
                <div className="arrow-icon">
                <img src={rowIcon} alt="Row icon" />
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}

export default MyOrders;