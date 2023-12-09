import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Entity} from "../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";
import EntityType from "../../../service_bus/microservices/consts/EntityType";

interface ShaderProgramState {
	releaseId: number;
	shaderEntity: Entity;
	newShaderProgramName: string;
}

const initialState: ShaderProgramState = {
	releaseId: 0,
	shaderEntity: {
		id: 0,
		name: "",
		entities: [],
		type: EntityType.SHADER
	},
	newShaderProgramName: ""
}

export const ShaderProgramSlice = createSlice({
	name: "shader_program",
	initialState: initialState,
	reducers: {
		updateReleaseId: (state, action: PayloadAction<number>) => {
			state.releaseId = action.payload;
		},
		updateShaderEntity: (state, action: PayloadAction<Entity>) => {
			state.shaderEntity = action.payload;
		},
		updateNewShaderProgramName: (state, action: PayloadAction<string>) => {
			state.newShaderProgramName = action.payload;
		}
	}
});

export const shaderProgramActions = ShaderProgramSlice.actions;

export default ShaderProgramSlice.reducer;