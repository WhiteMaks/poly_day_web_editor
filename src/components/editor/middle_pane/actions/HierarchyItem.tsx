import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./actions.module.css";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import BaseIcon from "../../../common/actions/BaseIcon";
import ReactComponentProps from "../../../common/ReactComponentProps";
import {Entity} from "../../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";

interface HierarchyItemProps extends ReactComponentProps {
	name: string;
	icon: string;
	isSelected: boolean;
	onDropEntity: (entity: Entity) => void;
}

const HierarchyItem: FC<HierarchyItemProps> = (props) => {

	return (
		<BlockWrapper
			onDragOver={event => event.preventDefault()}
			onDrop={event => {
				event.preventDefault();
				props.onDropEntity(JSON.parse(event.dataTransfer.getData("json")));
			}}>
			<FlexboxWrapper
				onClick={props.onClick}
				className={props.isSelected ? style.hierarchy_item_selected : style.hierarchy_item}>
				<BaseIcon
					className={style.hierarchy_item_icon}
					description={props.name}
					iconPath={props.icon}/>
				<BlockWrapper>
					{props.name}
				</BlockWrapper>
			</FlexboxWrapper>
			{props.isSelected ?
				<BlockWrapper
					className={style.hierarchy_item_objects}>
					{props.children}
				</BlockWrapper> : null}
		</BlockWrapper>

	);

}

export default HierarchyItem;