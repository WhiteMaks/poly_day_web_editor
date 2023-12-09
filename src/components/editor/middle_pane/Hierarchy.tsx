import {FC} from "react";
import SidePane from "./side_pane/SidePane";
import HierarchyItem from "./actions/HierarchyItem";
import iconCamera from "../../../resources/icons/camera.svg";
import iconLightSource from "../../../resources/icons/light_source.svg";
import ShaderProgramsHierarchyItem from "./actions/ShaderProgramsHierarchyItem";

interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {

	return (
		<SidePane
			title={"Hierarchy"}>
			<HierarchyItem
				isSelected={false}
				name={"Camera"}
				icon={iconCamera}/>
			<HierarchyItem
				isSelected={false}
				name={"Light Sources"}
				icon={iconLightSource}/>
			<ShaderProgramsHierarchyItem/>
		</SidePane>
	);

}

export default Hierarchy;