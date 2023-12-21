import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Entity} from "../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";
import EntityType from "../../../service_bus/microservices/consts/EntityType";
import {
	ShaderProgram
} from "../../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";

interface ShaderProgramState {
	releaseId: number;
	shaderEntity: Entity;
	newShaderProgramName: string;
	shaderPrograms: ShaderProgram[]
	selectedShaderProgram: ShaderProgram | null;
}

const initialState: ShaderProgramState = {
	releaseId: 0,
	shaderEntity: {
		id: 0,
		name: "",
		entities: [],
		type: EntityType.SHADER
	},
	newShaderProgramName: "",
	shaderPrograms: [],
	selectedShaderProgram: null
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
		},
		updateShaderPrograms: (state, action: PayloadAction<ShaderProgram[]>) => {
			state.shaderPrograms = action.payload;

			if (state.selectedShaderProgram) {
				const newSelectedShaderProgram = action.payload.find(shaderProgram => shaderProgram.id === state.selectedShaderProgram?.id);
				if (newSelectedShaderProgram) {
					state.selectedShaderProgram = newSelectedShaderProgram;
				}
			}
		},
		updateSelectedShaderProgram: (state, action: PayloadAction<ShaderProgram | null>) => {
			if (state.selectedShaderProgram && state.selectedShaderProgram.id === action.payload?.id ) {
				state.selectedShaderProgram = null;

				return
			}

			state.selectedShaderProgram = action.payload;
		}
	}
});

export const shaderProgramActions = ShaderProgramSlice.actions;

export default ShaderProgramSlice.reducer;