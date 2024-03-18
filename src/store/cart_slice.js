import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui_slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(draft, action) {
            const newItem = action.payload;
            //to check whether it is available
            const existingItem = draft.itemList.find(
                (item) => item.id === newItem.id
            );
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                draft.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
                draft.totalQuantity++;
            }
        },
        removeFromCart(draft, action) {
            const id = action.payload;

            const existingItem = draft.itemList.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                draft.itemList = draft.itemList.filter(item => item.id !== id);
                draft.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;

            }
        },
        setShowCart(draft) {
            draft.showCart = !draft.showCart;
        },
    },
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending Request",
                type: "warning",
            })
        );
        async function sendRequest() {
            const res = await fetch(
                'https://redux-http-14b55-default-rtdb.firebaseio.com/cartItems.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                }
            );
            const data = await res.json();
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sent Request to Database Successfully",
                type: 'success'
            })
            );
        };
        try {
            await sendRequest();
        } catch (err) {
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sending Request Failed",
                type: 'error'
            }))
        }
    }
}
export const cartActions = cartSlice.actions;
export default cartSlice;