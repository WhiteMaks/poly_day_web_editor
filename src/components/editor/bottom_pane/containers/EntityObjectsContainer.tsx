import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {useGlobalDispatch, useGlobalSelector} from "../../../../state/store";
import EntityObject from "../actions/EntityObject";
import {Entity} from "../../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";
import style from "./entity_objects_container.module.css";
import {contextMenuActions} from "../../../../state/context_menu/ContextMenuReducer";

interface EntityObjectsContainerProps {
	onSelectEntityObject: (entity: Entity) => void
}

const EntityObjectsContainer: FC<EntityObjectsContainerProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
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
						onContext={(x, y, entity) => {
							globalDispatch(contextMenuActions.updateEntityObjectX(x));
							globalDispatch(contextMenuActions.updateEntityObjectY(y));
							globalDispatch(contextMenuActions.updateSelectedEntity(entity));
							globalDispatch(contextMenuActions.updateEntityObjectIsDisplayed(true));
						}}
						key={entity.id}
						onSelect={props.onSelectEntityObject}
						entity={entity}/>
			)}
		</FlexboxWrapper>
	);
}

export default EntityObjectsContainer;