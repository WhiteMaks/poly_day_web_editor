import AuthenticateType from "../../core/enums/AuthenticateType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthenticateState {
	type: AuthenticateType
	username: string
	password: string
}

const initialState: AuthenticateState = {
	type: AuthenticateType.LOGIN,
	username: "",
	password: ""
}

export const authenticateSlice = createSlice({
	name: "authenticate",
	initialState: initialState,
	reducers: {
		updateUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		updatePassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		updateType: (state, action: PayloadAction<AuthenticateType>) => {
			state.type = action.payload;
		}
	}
});

export const authenticateActions = authenticateSlice.actions;

export default authenticateSlice.reducer;