import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Release} from "../../service_bus/microservices/developer_service/models/GetReleases10BodyResponse";

interface ContextMenuState {
	releaseTabIsDisplayed: boolean
	releaseTabX: number
	releaseTabY: number
	selectedRelease: Release
}

const initialState: ContextMenuState = {
	releaseTabIsDisplayed: false,
	releaseTabX: 0,
	releaseTabY: 0,
	selectedRelease: {
		name: "",
		id: 0
	}
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
		}
	}
});

export const contextMenuActions = ContextMenuSlice.actions;

export default ContextMenuSlice.reducer;