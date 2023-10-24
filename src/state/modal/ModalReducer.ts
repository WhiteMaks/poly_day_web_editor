import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
	createReleaseIsDisplayed: boolean
}

const initialState: ModalState = {
	createReleaseIsDisplayed: false
}

export const ModalSlice = createSlice({
	name: "modal",
	initialState: initialState,
	reducers: {
		updateCreateReleaseIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.createReleaseIsDisplayed = action.payload;
		}
	}
});

export const modalActions = ModalSlice.actions;

export default ModalSlice.reducer;