import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addtoCart(draft, action) {
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
        removeFromCart(draft) { },
        setShowCart(draft) {
            draft.showCart = true;
        },
    },
});
export const cartActions = cartSlice.actions;
export default cartSlice;