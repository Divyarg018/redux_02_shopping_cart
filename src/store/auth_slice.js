import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(draft) {
            draft.isLoggedIn = true;
        },
        logout(draft) {
            draft.isLoggedIn = false;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;