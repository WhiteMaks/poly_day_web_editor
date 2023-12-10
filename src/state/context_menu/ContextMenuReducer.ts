import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Release} from "../../service_bus/microservices/developer_service/models/release/GetReleases10BodyResponse";
import {Entity} from "../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";
import EntityType from "../../service_bus/microservices/consts/EntityType";
import {
	ShaderProgram
} from "../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";

interface ContextMenuState {
	releaseTabIsDisplayed: boolean
	releaseTabX: number
	releaseTabY: number
	selectedRelease: Release

	createEntityIsDisplayed: boolean
	createEntityX: number
	createEntityY: number

	entityObjectIsDisplayed: boolean
	entityObjectX: number
	entityObjectY: number
	selectedEntity: Entity

	shaderProgramIsDisplayed: boolean
	shaderProgramX: number
	shaderProgramY: number
	selectedShaderProgram: ShaderProgram
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
	createEntityY: 0,

	entityObjectIsDisplayed: false,
	entityObjectX: 0,
	entityObjectY: 0,
	selectedEntity: {
		entities: [],
		name: "",
		id: 0,
		type: EntityType.FOLDER
	},

	shaderProgramIsDisplayed: false,
	shaderProgramX: 0,
	shaderProgramY: 0,
	selectedShaderProgram: {
		name: "",
		id: 0,
		shader_entity_id: 0
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
		},

		updateCreateEntityIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.createEntityIsDisplayed = action.payload;
		},
		updateCreateEntityX: (state, action: PayloadAction<number>) => {
			state.createEntityX = action.payload;
		},
		updateCreateEntityY: (state, action: PayloadAction<number>) => {
			state.createEntityY = action.payload;
		},

		updateEntityObjectIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.entityObjectIsDisplayed = action.payload;
		},
		updateEntityObjectX: (state, action: PayloadAction<number>) => {
			state.entityObjectX = action.payload;
		},
		updateEntityObjectY: (state, action: PayloadAction<number>) => {
			state.entityObjectY = action.payload;
		},
		updateSelectedEntity: (state, action: PayloadAction<Entity>) => {
			state.selectedEntity = action.payload;
		},

		updateShaderProgramIsDisplayed: (state, action: PayloadAction<boolean>) => {
			state.shaderProgramIsDisplayed = action.payload;
		},
		updateShaderProgramX: (state, action: PayloadAction<number>) => {
			state.shaderProgramX = action.payload;
		},
		updateShaderProgramY: (state, action: PayloadAction<number>) => {
			state.shaderProgramY = action.payload;
		},
		updateSelectedShaderProgram: (state, action: PayloadAction<ShaderProgram>) => {
			state.selectedShaderProgram = action.payload;
		},
	}
});

export const contextMenuActions = ContextMenuSlice.actions;

export default ContextMenuSlice.reducer;