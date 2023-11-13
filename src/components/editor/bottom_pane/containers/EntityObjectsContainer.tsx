import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {useGlobalSelector} from "../../../../state/store";
import EntityObject from "../actions/EntityObject";
import {Entity} from "../../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import style from "./entity_objects_container.module.css";

interface EntityObjectsContainerProps {
	onSelectEntityObject: (entity: Entity) => void
}

const EntityObjectsContainer: FC<EntityObjectsContainerProps> = (props) => {
	const {
		entities,
		parentEntity
	} = useGlobalSelector(state => state.entityReducer);

	const entitiesForeRender = parentEntity ? parentEntity.entities : entities;

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			{entitiesForeRender.map(
				entity =>
					<EntityObject
						key={entity.id}
						onSelect={props.onSelectEntityObject}
						entity={entity}/>
			)}
		</FlexboxWrapper>
	);
}

export default EntityObjectsContainer;