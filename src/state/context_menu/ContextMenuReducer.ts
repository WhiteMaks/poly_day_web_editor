import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Release} from "../../service_bus/microservices/developer_service/models/GetReleases10BodyResponse";

interface ContextMenuState {
	releaseTabIsDisplayed: boolean
	releaseTabX: number
	releaseTabY: number
	selectedRelease: Release

	createEntityIsDisplayed: boolean
	createEntityX: number
	createEntityY: number
}

const initialState: ContextMenuState = {
	releaseTabIsDisplayed: false,
	releaseTabX: 0,
	releaseTabY: 0,
	selectedRelease: {
		name: "",
		id: 0
	},

	createEntityIsDisplayed: false,
	createEntityX: 0,
	createEntityY: 0
}

export const ContextMenuSlice = createSlice({
	name: "context-menu",
	initialState: initialState,
	reducers: {
		updateReleaseTabIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.releaseTabIsDisplayed = action.payload;
		},
		updateReleaseTabX: (state, action: PayloadAction<number>) => {
			state.releaseTabX = action.payload;
		},
		updateReleaseTabY: (state, action: PayloadAction<number>) => {
			state.releaseTabY = action.payload;
		},
		updateSelectedRelease: (state, action: PayloadAction<Release>) => {
			state.selectedRelease = action.payload;
		},

		updateCreateEntityIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.createEntityIsDisplayed = action.payload;
		},
		updateCreateEntityX: (state, action: PayloadAction<number>) => {
			state.createEntityX = action.payload;
		},
		updateCreateEntityY: (state, action: PayloadAction<number>) => {
			state.createEntityY = action.payload;
		}
	}
});

export const contextMenuActions = ContextMenuSlice.actions;

export default ContextMenuSlice.reducer;