import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id: number | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    userName: string | null;
    dateOfBirth: Date | null;
    profilePicture: string | null;
}

const initialState: UserState = {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    dateOfBirth: null,
    profilePicture: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return action.payload;
        },
        updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => initialState,
    },
});

export const { setUser, updateUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
