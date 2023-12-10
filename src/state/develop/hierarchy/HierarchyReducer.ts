import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface HierarchyState {
	shaderProgramsIsVisible: boolean;
}

const initialState: HierarchyState = {
	shaderProgramsIsVisible: false
}

export const HierarchySlice = createSlice({
	name: "hierarchy",
	initialState: initialState,
	reducers: {
		updateShaderProgramsIsVisible: (state, action: PayloadAction<boolean>) => {
			state.shaderProgramsIsVisible = action.payload;
		}
	}
});

export const hierarchyActions = HierarchySlice.actions;

export default HierarchySlice.reducer;