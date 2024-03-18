import { uiActions } from "./ui_slice";

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