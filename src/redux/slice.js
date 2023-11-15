import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        username: null,
        firstName: null,
        lastName: null,
    },
    reducers: {

        signIn: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.username = null;
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