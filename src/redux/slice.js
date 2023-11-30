import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        userName: null,
        firstName: null,
        lastName: null,
    },
    reducers: {

        signIn: (state, action) => {
            state.isAuthenticated = true;
            state.userName = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.userName = null;
            state.firstName = null;
            state.lastName = null;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },

    },
});

export const { signIn, signOut, setFirstName, setLastName } = userSlice.actions;
export default userSlice.reducer;