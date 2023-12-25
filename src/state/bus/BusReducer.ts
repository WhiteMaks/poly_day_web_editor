import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import BusStatus from "../../support/enums/BusStatus";

interface BusState {
	status: BusStatus
}

const initialState: BusState = {
	status: BusStatus.OFFLINE
}

export const BusSlice = createSlice({
	name: "bus",
	initialState: initialState,
	reducers: {
		updateStatus: (state, action: PayloadAction<BusStatus>) => {
			state.status = action.payload;
		}
	}
});

export const busActions = BusSlice.actions;

export default BusSlice.reducer;