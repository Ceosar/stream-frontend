import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string | null;
    username: string | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    id: null,
    username: null,
    email: null,
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ id: string; username: string; email: string }>) => {
            const { id, username, email } = action.payload;
            state.id = id;
            state.username = username;
            state.email = email;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.id = null;
            state.username = null;
            state.email = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
