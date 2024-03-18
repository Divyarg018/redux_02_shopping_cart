import React from "react";
import { useDispatch } from "react-redux";
import "../cart/Cart.css";
import { cartActions } from '../../store/cart_slice.js';

function CartItem(props) {
    const dispatch = useDispatch();

    function removeHandler() {
        dispatch(cartActions.removeFromCart(props.id));
    };
    
    function addHandler() {
        dispatch(
            cartActions.addToCart({
                id: props.id,
                name: props.name,
                price: props.price,
            })
        );
    }
    return (
        <div className="cartItem">
            <h2> {props.name}</h2>
            <p>${props.price} /-</p>
            <p>x{props.quantity}</p>
            <article>Total ${props.totalPrice}</article>
            <button className="cart-actions" onClick={removeHandler}>
                -
            </button>
            <button className="cart-actions" onClick={addHandler}>
                +
            </button>
        </div>
    );
}

export default CartItem;