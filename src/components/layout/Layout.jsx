import React from "react";
import Header from '../header/Header.jsx';
import Products from '../products/Products.jsx';
import "./Layout.css";
import CartItems from "../cartitems/CartItems.jsx";
import { useSelector } from "react-redux";

const Layout = function () {
    let total = 100;
    const showCart = useSelector(state => state.cart.showCart);

    return (
        <React.Fragment>
            <div className="layout">
                <Header />
                <Products />
                {showCart && <CartItems />}
                <div className="total-price">
                    <h3>Total: ${total}</h3>
                    <button className="orderBtn">Place Order</button>
                </div>{" "}
            </div>
        </React.Fragment>
    );
};

export default Layout;