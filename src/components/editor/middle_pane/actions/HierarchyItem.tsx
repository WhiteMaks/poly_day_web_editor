import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./actions.module.css";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import BaseIcon from "../../../common/actions/BaseIcon";
import ReactComponentProps from "../../../common/ReactComponentProps";

interface HierarchyItemProps extends ReactComponentProps {
	name: string;
	icon: string;
	isSelected: boolean;
}

const HierarchyItem: FC<HierarchyItemProps> = (props) => {

	return (
		<BlockWrapper>
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