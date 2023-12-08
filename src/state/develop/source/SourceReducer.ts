import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GetModelSource10BodyResponse
	from "../../../service_bus/microservices/developer_service/models/source/GetModelSource10BodyResponse";
import GetShaderSource10BodyResponse
	from "../../../service_bus/microservices/developer_service/models/source/GetShaderSource10BodyResponse";
import ShaderType from "../../../core/enums/ShaderType";

interface SourceState {
	model: GetModelSource10BodyResponse | null,
	newModelSource: string,
	shader: GetShaderSource10BodyResponse | null,
	newVertexShader: string,
	newFragmentShader: string
	selectedShaderType: ShaderType
}

const initialState: SourceState = {
	model: null,
	newModelSource: "",
	shader: null,
	newVertexShader: "",
	newFragmentShader: "",
	selectedShaderType: ShaderType.VERTEX
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
		},
		updateSelectedShaderType: (state, action: PayloadAction<ShaderType>) => {
			state.selectedShaderType = action.payload;
		}
	}
});

export const sourceActions = SourceSlice.actions;

export default SourceSlice.reducer;