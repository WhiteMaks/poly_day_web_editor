import {Release} from "../../../service_bus/microservices/developer_service/models/release/GetReleases10BodyResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ReleaseState {
	selectedRelease: Release | null;
	releases: Release[];
	newReleaseName: string;
}

const initialState: ReleaseState = {
	selectedRelease: null,
	releases: [],
	newReleaseName: ""
}

export const ReleaseSlice = createSlice({
	name: "release",
	initialState: initialState,
	reducers: {
		updateReleases: (state, action: PayloadAction<Release[]>) => {
			state.releases = action.payload;
		},
		updateSelectedRelease: (state, action: PayloadAction<Release>) => {
			state.selectedRelease = action.payload;
		},
		updateNewReleaseName: (state, action: PayloadAction<string>) => {
			state.newReleaseName = action.payload;
		}
	}
});

export const releaseActions = ReleaseSlice.actions;

export default ReleaseSlice.reducer;