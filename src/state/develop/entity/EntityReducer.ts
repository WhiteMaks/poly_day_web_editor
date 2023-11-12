import {
	compareByName, compareByTypeFolder,
	Entity
} from "../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import EntityType from "../../../service_bus/microservices/consts/EntityType";

interface EntityState {
	parentEntity: Entity | null;
	entities: Entity[];
	newEntityName: string;
	newEntityType: EntityType;
}

const initialState: EntityState = {
	parentEntity: null,
	entities: [],
	newEntityName: "",
	newEntityType: EntityType.FOLDER
}

export const EntitySlice = createSlice({
	name: "entity",
	initialState: initialState,
	reducers: {
		updateEntities: (state, action: PayloadAction<Entity[]>) => {
			state.entities = action.payload
				.sort(compareByName)
				.sort(compareByTypeFolder);
		},
		updateParentEntity: (state, action: PayloadAction<Entity>) => {
			state.parentEntity = action.payload;
		},
		updateNewEntityName: (state, action: PayloadAction<string>) => {
			state.newEntityName = action.payload;
		},
		updateNewEntityType: (state, action: PayloadAction<EntityType>) => {
			state.newEntityType = action.payload;
		}
	}
});

export const entityActions = EntitySlice.actions;

export default EntitySlice.reducer;