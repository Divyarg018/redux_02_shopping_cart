import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

function Cart() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    // const quantity = 5;
    return (
        <div className="cartIcon">
            <h3>Cart: {totalQuantity} Items</h3>
        </div>
    );
}

export default Cart;