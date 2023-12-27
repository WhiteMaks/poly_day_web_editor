import {FC} from "react";
import BlockWrapper from "../../../../common/wrappers/BlockWrapper";
import ReactComponentProps from "../../../../common/ReactComponentProps";
import style from "./objects_pane.module.css";
import {
	Entity
} from "../../../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";

interface ObjectsPaneProps extends ReactComponentProps {
	onDropEntity: (entity: Entity) => void;
}

const ObjectsPane: FC<ObjectsPaneProps> = (props) => {

	return (
		<BlockWrapper
			className={style.wrapper}
			onDragOver={event => event.preventDefault()}
			onDrop={event => {
				event.preventDefault();
				props.onDropEntity(JSON.parse(event.dataTransfer.getData("json")));
			}}>
			{props.children}
		</BlockWrapper>
	);

}

export default ObjectsPane;