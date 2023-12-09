import {FC} from "react";
import SidePane from "./side_pane/SidePane";
import HierarchyItem from "./actions/HierarchyItem";
import iconCamera from "../../../resources/icons/camera.svg";
import iconLightSource from "../../../resources/icons/light_source.svg";
import ShaderProgramsHierarchyItem from "./actions/ShaderProgramsHierarchyItem";
import {useGlobalSelector} from "../../../state/store";

interface HierarchyProps {

}

const Hierarchy: FC<HierarchyProps> = (props) => {
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);

	const renderBodyIfNeed = () => {
		if (!selectedRelease) {
			return null;
		}

		return [
			<HierarchyItem
				onDropEntity={() => console.log("drop on camera")}
				isSelected={false}
				name={"Camera"}
				icon={iconCamera}/>,
			<HierarchyItem
				onDropEntity={() => console.log("drop on light sources")}
				isSelected={false}
				name={"Light Sources"}
				icon={iconLightSource}/>,
			<ShaderProgramsHierarchyItem/>
		];
	}

	return (
		<SidePane
			title={"Hierarchy"}>
			{renderBodyIfNeed()}
		</SidePane>
	);

}

export default Hierarchy;