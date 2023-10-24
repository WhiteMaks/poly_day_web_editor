import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import checkUserReducer from "./check_user/CheckUserReducer";
import authenticateReducer from "./authenticate/AuthenticateReducer";
import busReducer from "./bus/BusReducer";
import releaseReducer from "./develop/release/ReleaseReducer";
import modalReducer from "./modal/ModalReducer";

const globalReducer = combineReducers({
	checkUserReducer,
	authenticateReducer,
	busReducer,
	releaseReducer,
	modalReducer,
});

export const initGlobalStore = () => {
	return configureStore({
		reducer: globalReducer
	});
}

export type GlobalState = ReturnType<typeof globalReducer>;
export type GlobalStore = ReturnType<typeof initGlobalStore>;
export type GlobalDispatch = GlobalStore['dispatch'];

export const useGlobalDispatch = () => useDispatch<GlobalDispatch>();
export const useGlobalSelector: TypedUseSelectorHook<GlobalState> = useSelector;