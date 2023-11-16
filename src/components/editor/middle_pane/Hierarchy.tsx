import {FC} from "react";
import SidePane from "./side_pane/SidePane";


interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {

	return (
		<SidePane
			title={"Hierarchy"}/>
	);

}

export default Hierarchy;