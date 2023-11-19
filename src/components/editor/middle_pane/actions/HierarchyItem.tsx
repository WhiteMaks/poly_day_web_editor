import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./actions.module.css";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import BaseIcon from "../../../common/actions/BaseIcon";

interface HierarchyItemProps {
	name: string;
	icon: string;
}

const HierarchyItem: FC<HierarchyItemProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.hierarchy_item}>
			<BaseIcon
				className={style.hierarchy_item_icon}
				description={props.name}
				iconPath={props.icon}/>
			<BlockWrapper>
				{props.name}
			</BlockWrapper>
		</FlexboxWrapper>
	);

}

export default HierarchyItem;