interface GetReleases10BodyResponse {
	releases: Release[]
}

export interface Release {
	id: number,
	name: string
}

export default GetReleases10BodyResponse;