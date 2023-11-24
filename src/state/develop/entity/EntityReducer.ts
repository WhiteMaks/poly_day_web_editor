import {
	Entity,
	findEntityById,
	sortEntities
} from "../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import EntityType from "../../../service_bus/microservices/consts/EntityType";

interface EntityState {
	parentEntity: Entity | null;
	selectedEntity: Entity | null;
	entities: Entity[];
	newEntityName: string;
	newEntityType: EntityType;
}

const initialState: EntityState = {
	parentEntity: null,
	selectedEntity: null,
	entities: [],
	newEntityName: "",
	newEntityType: EntityType.FOLDER
}

export const EntitySlice = createSlice({
	name: "entity",
	initialState: initialState,
	reducers: {
		updateEntities: (state, action: PayloadAction<Entity[]>) => {
			const result = action.payload;
			sortEntities(result);
			state.entities = result;

			if (state.parentEntity) {
				state.parentEntity = findEntityById(action.payload, state.parentEntity.id);
			}
		},
		updateParentEntity: (state, action: PayloadAction<Entity | null>) => {
			state.parentEntity = action.payload;
		},
		updateSelectedEntity: (state, action: PayloadAction<Entity | null>) => {
			state.selectedEntity = action.payload;
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