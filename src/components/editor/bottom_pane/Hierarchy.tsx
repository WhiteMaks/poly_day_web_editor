import {FC} from "react";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import style from "./bottom_pane.module.css";
import FolderObjectsContainer from "./containers/FolderObjectsContainer";

interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {

	return (
		<BlockWrapper
			className={style.hierarchy}>
			<FolderObjectsContainer/>
		</BlockWrapper>
	);

}

export default Hierarchy;