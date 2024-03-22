
import { createSlice } from "@reduxjs/toolkit";

const baseState = () => ({
    firstName: "",
    lastName: "",
    userName: "",
    error: null,
}
)

const userSlice = createSlice({
    name:'user',
    initialState: baseState(),
    reducers: {
        userSuccess: (state, action) => {
            const { firstName, lastName, userName } = action.payload;
            Object.assign(state, { firstName, lastName, userName, error: null });
        },
        userFail : (state, action) => {
            Object.assign(state, baseState(), { error: action.payload });
        },
        userLogOut: (state) => {
            Object.assign(state, baseState());
        },
    },
})

export const { userSuccess, userFail, userLogOut } = userSlice.actions;

export default userSlice.reducer;



