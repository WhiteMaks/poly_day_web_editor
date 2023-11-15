import {FC} from "react";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import style from "./midle_pane.module.css";


interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {

	return (
		<BlockWrapper className={style.side_pane}>
			Hierarchy
		</BlockWrapper>
	);

}

export default Hierarchy;