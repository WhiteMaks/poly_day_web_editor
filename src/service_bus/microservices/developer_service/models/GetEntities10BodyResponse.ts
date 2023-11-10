import EntityType from "../../consts/EntityType";

interface GetEntities10BodyResponse {
	entities: Entity[]
}

export interface Entity {
	id: number,
	name: string
	type: EntityType,
	entities: Entity[]
}

export default GetEntities10BodyResponse;