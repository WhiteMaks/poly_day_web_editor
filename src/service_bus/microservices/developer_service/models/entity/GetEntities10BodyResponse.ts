import EntityType from "../../../consts/EntityType";

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
	return first.name.localeCompare(
		second.name,
		undefined,
		{
			numeric: true,
			sensitivity: "base"
		}
	);
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

export const sortEntities = (entities: Entity[]) => {
	entities.sort(compareByName)
		.sort(compareByTypeFolder);

	for (const entity of entities) {
		if (entity.type === EntityType.FOLDER) {
			sortEntities(entity.entities);
		}
	}
}

export const findEntityById = (entities: Entity[], entityId: number): Entity | null => {
	for (const entity of entities) {
		if (entity.id === entityId) {
			return entity;
		}

		if (entity.type === EntityType.FOLDER) {
			const result = findEntityById(entity.entities, entityId);
			if (result) {
				return result;
			}
		}
	}

	return null;
}

export default GetEntities10BodyResponse;