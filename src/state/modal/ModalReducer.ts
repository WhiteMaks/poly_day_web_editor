import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
	createReleaseIsDisplayed: boolean;
	createEntityIsDisplayed: boolean;
}

const initialState: ModalState = {
	createReleaseIsDisplayed: false,
	createEntityIsDisplayed: false
}

export const ModalSlice = createSlice({
	name: "modal",
	initialState: initialState,
	reducers: {
		updateCreateReleaseIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.createReleaseIsDisplayed = action.payload;
		},
		updateCreateEntityIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.createEntityIsDisplayed = action.payload;
		}
	}
});

export const modalActions = ModalSlice.actions;

export default ModalSlice.reducer;