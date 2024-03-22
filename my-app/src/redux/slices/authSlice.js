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
        loginFail: (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isConnected = false;
            state.token = ""
        }
    }
})

export const { loginSuccess, logout, loginFail } = authSlice.actions;
export default authSlice.reducer;