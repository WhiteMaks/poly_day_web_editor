import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./actions.module.css";
import BaseIcon from "../../../common/actions/BaseIcon";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";

interface HierarchyChildProps {
	name: string;
	icon: string;
	isSelected: boolean;
	onContext: (clientX: number, clientY: number) => void;
	onClick: () => void;
}

const HierarchyChild: FC<HierarchyChildProps> = (props) => {

	return (
		<FlexboxWrapper
			onClick={props.onClick}
			onContextMenu={event => {
				event.preventDefault();

				if (props.onContext) {
					props.onContext(event.clientX, event.clientY);
				}
			}}
			className={props.isSelected ? style.hierarchy_child_selected : style.hierarchy_child}>
			<BaseIcon
				className={style.hierarchy_child_icon}
				description={props.name}
				iconPath={props.icon}/>
			<BlockWrapper>
				{props.name}
			</BlockWrapper>
		</FlexboxWrapper>
	);

}

export default HierarchyChild;