import AuthenticateType from "../../core/enums/AuthenticateType";
import {createSlice} from "@reduxjs/toolkit";

interface AuthenticateState {
	type: AuthenticateType
}

const initialState: AuthenticateState = {
	type: AuthenticateType.LOGIN
}

export const authenticateSlice = createSlice({
	name: "authenticate",
	initialState: initialState,
	reducers: {}
});

export default authenticateSlice.reducer;