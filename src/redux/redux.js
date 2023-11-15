import { createSlice } from "@reduxjs/toolkit"

const connectSlice = createSlice({
    name: "user",
    initialState:
    {
        isAuthenticated: false,
        username: null,
        firstName: null,
        lastName: null,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            state.username = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = null;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },

    }
})

export const { login, logout, setFirstName, setLastName } = connectSlice.actions;

export default connectSlice.actions