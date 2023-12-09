import {FC} from "react";
import HierarchyItem from "./HierarchyItem";
import iconShaderProgram from "../../../../resources/icons/shader_program.svg";
import {useGlobalDispatch, useGlobalSelector} from "../../../../state/store";
import {hierarchyActions} from "../../../../state/develop/hierarchy/HierarchyReducer";
import EntityType from "../../../../service_bus/microservices/consts/EntityType";
import {modalActions} from "../../../../state/modal/ModalReducer";
import {shaderProgramActions} from "../../../../state/develop/shader_program/ShaderProgramReducer";

const ShaderProgramsHierarchyItem: FC = () => {
	const globalDispatch = useGlobalDispatch();
	const {
		shaderProgramsIsVisible
	} = useGlobalSelector(state => state.hierarchyReducer);
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);

	return (
		<HierarchyItem
			onDropEntity={entity => {
				if (entity.type !== EntityType.SHADER) {
					return;
				}

				globalDispatch(shaderProgramActions.updateReleaseId(selectedRelease!.id));
				globalDispatch(shaderProgramActions.updateShaderEntity(entity));
				globalDispatch(modalActions.updateCreateShaderProgramIsDisplayed(true));
			}}
			onClick={() => globalDispatch(hierarchyActions.updateShaderProgramsIsVisible(!shaderProgramsIsVisible))}
			isSelected={shaderProgramsIsVisible}
			name={"Shader programs"}
			icon={iconShaderProgram}>
		</HierarchyItem>
	);
}

export default ShaderProgramsHierarchyItem;