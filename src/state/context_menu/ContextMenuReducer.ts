import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Release} from "../../service_bus/microservices/developer_service/models/GetReleases10BodyResponse";
import {Entity} from "../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import EntityType from "../../service_bus/microservices/consts/EntityType";

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
	}
});

export const contextMenuActions = ContextMenuSlice.actions;

export default ContextMenuSlice.reducer;