import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import CheckUserResponse from "../../api/models/CheckUserResponse";
import {serviceConnectionError} from "../../index";
import AuthenticateApi from "../../api/AuthenticateApi";

interface CheckUserState {
	loading:    boolean,
	check:      CheckUserResponse
}

const initialState: CheckUserState = {
	loading: true,
	check: {
		error: "",
		authorized: false
	}
}

const userApi = AuthenticateApi.getInstance().getUserApi();

export const fetchCheckUser = createAsyncThunk<CheckUserResponse>("user/check", () => {
	return userApi.check()
});

export const checkUserSlice = createSlice({
	name: "check-user",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCheckUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchCheckUser.fulfilled, (state, action) => {
			state.loading = false;
			state.check = action.payload;
		});
		builder.addCase(fetchCheckUser.rejected, (state, action) => {
			state.loading = false;
			state.check.error = serviceConnectionError;
		});
	}
});


export default checkUserSlice.reducer;