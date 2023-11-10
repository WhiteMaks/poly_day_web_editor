import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {useGlobalSelector} from "../../../../state/store";
import EntityObject from "../actions/EntityObject";
import {Entity} from "../../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";

interface EntityObjectsContainerProps {
	onSelectEntityObject: (entity: Entity) => void
}

const EntityObjectsContainer: FC<EntityObjectsContainerProps> = (props) => {
	const {
		entities
	} = useGlobalSelector(state => state.entityReducer);

	return (
		<FlexboxWrapper>
			{entities.map(
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