import React from "react";
import Header from '../header/Header.jsx';
import Products from '../products/Products.jsx';
import "./Layout.css";
const Layout = function () {
    let total = 100;

    return (
        <React.Fragment>
            <div className="layout">
                <Header />
                <Products />
                <div className="total-price">
                    <h3>Total: ${total}</h3>
                    <button className="orderBtn">Place Order</button>
                </div>{" "}
            </div>
        </React.Fragment>
    );
};

export default Layout;