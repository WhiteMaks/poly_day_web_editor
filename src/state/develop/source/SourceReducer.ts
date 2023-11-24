import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GetModelSource10BodyResponse
	from "../../../service_bus/microservices/developer_service/models/GetModelSource10BodyResponse";

interface SourceState {
	model: GetModelSource10BodyResponse | null,
	newModelSource: string
}

const initialState: SourceState = {
	model: null,
	newModelSource: ""
}

export const SourceSlice = createSlice({
	name: "source",
	initialState: initialState,
	reducers: {
		updateModel: (state, action: PayloadAction<GetModelSource10BodyResponse | null>) => {
			state.model = action.payload;

			if (action.payload) {
				state.newModelSource = action.payload.source_base_64;
			}
		},
		updateNewModelSource: (state, action: PayloadAction<string>) => {
			state.newModelSource = action.payload;
		}
	}
});

export const sourceActions = SourceSlice.actions;

export default SourceSlice.reducer;