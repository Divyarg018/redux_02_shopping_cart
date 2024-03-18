import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart_slice.js";

function Cart() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    function showCart() {
        dispatch(cartActions.setShowCart());
    }
    // const quantity = 5;
    return (
        <div className="cartIcon">
            <h3 onClick={showCart}>Cart: {totalQuantity} Items</h3>
        </div>
    );
}

export default Cart;