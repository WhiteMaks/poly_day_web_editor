import AuthenticateType from "../../support/enums/AuthenticateType";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthenticateApi from "../../api/AuthenticateApi";
import LoginUserResponse from "../../api/models/LoginUserResponse";
import {serviceConnectionError} from "../../index";
import Common from "../../support/Common";
import CreateUserResponse from "../../api/models/CreateUserResponse";

interface AuthenticateState {
	type:       AuthenticateType
	login:      LoginUserResponse
	create:     CreateUserResponse
	loading:    boolean,
	username:   string
	password:   string
}

const initialState: AuthenticateState = {
	loading: false,
	type: AuthenticateType.LOGIN,
	username: "",
	password: "",
	create: {
		error: "",
		id: 0
	},
	login: {
		error: "",
		token: ""
	}
}

const userApi = AuthenticateApi.getInstance().getUserApi();

export const fetchLoginUser = createAsyncThunk<LoginUserResponse, {username: string, password: string}>("user/login", (args) => {
	return userApi.login(
		args.username,
		args.password
	);
});

export const fetchCreateUser = createAsyncThunk<CreateUserResponse, {username: string, password: string}>("user/create", (args) => {
	return userApi.create(
		args.username,
		args.password
	);
});

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
	},
	extraReducers: builder => {
		builder.addCase(fetchLoginUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
			state.loading = false;
			state.login = action.payload;
			Common.setTokenInLocalStorage(action.payload.token);
		});
		builder.addCase(fetchLoginUser.rejected, (state, action) => {
			state.loading = false;
			state.login.error = serviceConnectionError;
		});

		builder.addCase(fetchCreateUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchCreateUser.fulfilled, (state, action) => {
			state.loading = false;
			state.create = action.payload;
		});
		builder.addCase(fetchCreateUser.rejected, (state, action) => {
			state.loading = false;
			state.create.error = serviceConnectionError;
		});
	}
});

export const authenticateActions = authenticateSlice.actions;

export default authenticateSlice.reducer;