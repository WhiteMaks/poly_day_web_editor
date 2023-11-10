import {Entity} from "../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EntityState {
	parentEntity: Entity | null;
	entities: Entity[];
}

const initialState: EntityState = {
	parentEntity: null,
	entities: [],
}

export const EntitySlice = createSlice({
	name: "entity",
	initialState: initialState,
	reducers: {
		updateEntities: (state, action: PayloadAction<Entity[]>) => {
			state.entities = action.payload;
		},
		updateParentEntity: (state, action: PayloadAction<Entity>) => {
			state.parentEntity = action.payload;
		}
	}
});

export const entityActions = EntitySlice.actions;

export default EntitySlice.reducer;