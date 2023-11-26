import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GetModelSource10BodyResponse
	from "../../../service_bus/microservices/developer_service/models/GetModelSource10BodyResponse";
import GetShaderSource10BodyResponse
	from "../../../service_bus/microservices/developer_service/models/GetShaderSource10BodyResponse";

interface SourceState {
	model: GetModelSource10BodyResponse | null,
	newModelSource: string,
	shader: GetShaderSource10BodyResponse | null,
	newVertexShader: string,
	newFragmentShader: string
}

const initialState: SourceState = {
	model: null,
	newModelSource: "",
	shader: null,
	newVertexShader: "",
	newFragmentShader: ""
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
		},
		updateShader: (state, action: PayloadAction<GetShaderSource10BodyResponse | null>) => {
			state.shader = action.payload;

			if (action.payload) {
				state.newVertexShader = action.payload.vertex_shader;
				state.newFragmentShader = action.payload.fragment_shader;
			}
		},
		updateNewVertexShader: (state, action: PayloadAction<string>) => {
			state.newVertexShader = action.payload;
		},
		updateNewFragmentShader: (state, action: PayloadAction<string>) => {
			state.newFragmentShader = action.payload;
		}
	}
});

export const sourceActions = SourceSlice.actions;

export default SourceSlice.reducer;