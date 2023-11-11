import {FC} from "react";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import style from "./bottom_pane.module.css";

interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {

	return (
		<BlockWrapper
			className={style.hierarchy}>
			Hierarchy
		</BlockWrapper>
	);

}

export default Hierarchy;