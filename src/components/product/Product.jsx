import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart_slice";

function Product(props) {
    const cartItems = useSelector((state) => state.cart.itemList);
    const dispatch = useDispatch();
    function addToCart() {
        dispatch(
            cartActions.addtoCart({
                name: props.name,
                id: props.id,
                price: props.price,
            })
        );
    }
    return (
        <div className="card">
            <img src={props.imgURL} alt={props.name} />
            <h2>{props.name}</h2>
            <p>$ {props.price}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default Product;