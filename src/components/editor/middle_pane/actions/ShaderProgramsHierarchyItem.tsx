import {FC} from "react";
import HierarchyItem from "./HierarchyItem";
import iconShaderProgram from "../../../../resources/icons/shader_program.svg";
import {useGlobalDispatch, useGlobalSelector} from "../../../../state/store";
import {hierarchyActions} from "../../../../state/develop/hierarchy/HierarchyReducer";

const ShaderProgramsHierarchyItem: FC = () => {
	const globalDispatch = useGlobalDispatch();
	const {
		shaderProgramsIsVisible
	} = useGlobalSelector(state => state.hierarchyReducer);

	return (
		<HierarchyItem
			onClick={() => globalDispatch(hierarchyActions.updateShaderProgramsIsVisible(!shaderProgramsIsVisible))}
			isSelected={shaderProgramsIsVisible}
			name={"Shader programs"}
			icon={iconShaderProgram}>
		</HierarchyItem>
	);
}

export default ShaderProgramsHierarchyItem;