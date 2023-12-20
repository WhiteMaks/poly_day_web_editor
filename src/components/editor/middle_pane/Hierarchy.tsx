import {FC, useEffect} from "react";
import SidePane from "./support/side_pane/SidePane";
import HierarchyItem from "./actions/HierarchyItem";
import iconCamera from "../../../resources/icons/camera.svg";
import iconLightSource from "../../../resources/icons/light_source.svg";
import ShaderProgramsHierarchyItem from "./actions/ShaderProgramsHierarchyItem";
import {useGlobalSelector} from "../../../state/store";
import BusClient from "../../../service_bus/BusClient";
import ObjectsPane from "./support/objects_pane/ObjectsPane";
import EntityType from "../../../service_bus/microservices/consts/EntityType";

interface HierarchyProps {
	bus: BusClient
}

const Hierarchy: FC<HierarchyProps> = (props) => {
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);

	const {
		shaderPrograms,
		selectedShaderProgram
	} = useGlobalSelector(state => state.shaderProgramReducer);

	useEffect(() => {
		if (selectedRelease) {
			props.bus.getDeveloperService().getShaderPrograms10(selectedRelease.id);
		}
	}, [props.bus, selectedRelease]);

	const renderBodyIfNeed = () => {
		if (!selectedRelease) {
			return null;
		}

		return [
			<HierarchyItem
				key={1}
				onDropEntity={() => console.log("drop on camera")}
				isSelected={false}
				name={"Camera"}
				icon={iconCamera}/>,
			<HierarchyItem
				key={2}
				onDropEntity={() => console.log("drop on light sources")}
				isSelected={false}
				name={"Light Sources"}
				icon={iconLightSource}/>,
			<ShaderProgramsHierarchyItem
				selectedShaderProgram={selectedShaderProgram}
				shaderPrograms={shaderPrograms}
				key={"ShaderPrograms"}/>
		];
	}

	const renderObjectsPaneIfNeed = () => {
		if (selectedShaderProgram) {
			return (
				<ObjectsPane
					onDropEntity={entity => {
						if (entity.type !== EntityType.MODEL) {
							return;
						}
					}}>

				</ObjectsPane>
			);
		}

		return null;
	}

	return (
		<SidePane
			title={"Hierarchy"}>
			{renderBodyIfNeed()}
			{renderObjectsPaneIfNeed()}
		</SidePane>
	);

}

export default Hierarchy;