
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',

    initialState : {
        firstName: "",
        lastName: "",
        userName: "",
        error: null,
    },
    reducers: {
        userSuccess: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.error = null;
        },
        userFail : (state, action) => {
            state.firstName = "";
            state.lastName = "";
            state.userName = "";
            state.error = action.payload;
        },
        userLogOut: (state) => {
            state.firstName = "";
            state.lastName = "";
            state.userName = "";
            state.error = null;
        },
    },
})

export const { userSuccess, userFail, userLogOut } = userSlice.actions;

export default userSlice.reducer;
