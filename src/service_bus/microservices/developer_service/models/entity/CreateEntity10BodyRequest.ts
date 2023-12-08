import EntityType from "../../../consts/EntityType";

interface CreateEntity10BodyRequest {
	name: string
	parent_entity_id: number
	type: EntityType
}

export default CreateEntity10BodyRequest;