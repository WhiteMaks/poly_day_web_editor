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

export const compareByName = (first: Entity, second: Entity) => {
	if (first.name < second.name) {
		return -1;
	}

	if (first.name > second.name) {
		return 1;
	}

	return 0;
}

export const compareByTypeFolder = (first: Entity, second: Entity) => {
	if (first.type !== second.type) {
		if (first.type === EntityType.FOLDER) {
			return -1;
		}

		if (second.type === EntityType.FOLDER) {
			return 1;
		}
	}

	return 0;
}

export const getOnlyFolders = (entities: Entity[]): Entity[] => {
	return entities.filter(entity => entity.type === EntityType.FOLDER);
}

export default GetEntities10BodyResponse;