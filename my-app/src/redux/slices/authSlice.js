import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',

    initialState : {
        isConnected: false,
        token: ""
    },

    reducers: {
        loginSuccess: (state, action) => {
            state.isConnected = true;
            state.token = action.payload.token
        },
        logout: (state) => {
            state.isConnected = false;
            state.token = ""
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;