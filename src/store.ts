import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import checkAuthenticateReducer from "./components/check_authenticate/state/CheckAuthenticateReducer";

const globalReducer = combineReducers({
	checkAuthenticateReducer
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