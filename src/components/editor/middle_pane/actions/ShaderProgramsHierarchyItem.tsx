import {FC} from "react";
import HierarchyItem from "./HierarchyItem";
import iconShaderProgram from "../../../../resources/icons/shader_program.svg";
import {useGlobalDispatch, useGlobalSelector} from "../../../../state/store";
import {hierarchyActions} from "../../../../state/develop/hierarchy/HierarchyReducer";
import EntityType from "../../../../service_bus/microservices/consts/EntityType";
import {modalActions} from "../../../../state/modal/ModalReducer";
import {shaderProgramActions} from "../../../../state/develop/shader_program/ShaderProgramReducer";
import ShaderProgramItem from "./ShaderProgramItem";
import {contextMenuActions} from "../../../../state/context_menu/ContextMenuReducer";

const ShaderProgramsHierarchyItem: FC = () => {
	const globalDispatch = useGlobalDispatch();
	const {
		shaderProgramsIsVisible
	} = useGlobalSelector(state => state.hierarchyReducer);
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);
	const {
		shaderPrograms
	} = useGlobalSelector(state => state.shaderProgramReducer);

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
			{shaderPrograms.map(
				shaderProgram =>
					<ShaderProgramItem
						onContext={(x, y, shaderProgram) => {
							globalDispatch(contextMenuActions.updateShaderProgramX(x));
							globalDispatch(contextMenuActions.updateShaderProgramY(y));
							globalDispatch(contextMenuActions.updateSelectedShaderProgram(shaderProgram));
							globalDispatch(contextMenuActions.updateShaderProgramIsDisplayed(true));
						}}
						key={shaderProgram.id}
						shaderProgram={shaderProgram}/>)}
		</HierarchyItem>
	);
}

export default ShaderProgramsHierarchyItem;