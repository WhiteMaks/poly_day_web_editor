import {FC} from "react";
import SidePane from "./side_pane/SidePane";
import HierarchyItem from "./actions/HierarchyItem";
import iconCamera from "../../../resources/icons/camera.svg";
import iconLightSource from "../../../resources/icons/light_source.svg";
import iconShaderProgram from "../../../resources/icons/shader_program.svg";

interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {

	return (
		<SidePane
			title={"Hierarchy"}>
			<HierarchyItem
				name={"Camera"}
				icon={iconCamera}/>
			<HierarchyItem
				name={"Light Sources"}
				icon={iconLightSource}/>
			<HierarchyItem
				name={"Shader Programs"}
				icon={iconShaderProgram}/>
		</SidePane>
	);

}

export default Hierarchy;