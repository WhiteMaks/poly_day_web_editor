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
import {
	ShaderProgram
} from "../../../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";

interface ShaderProgramsHierarchyItemProps {
	shaderPrograms: ShaderProgram[];
	selectedShaderProgram: ShaderProgram | null;
}

const ShaderProgramsHierarchyItem: FC<ShaderProgramsHierarchyItemProps> = (props) => {
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
			onClick={() => {
				globalDispatch(hierarchyActions.updateShaderProgramsIsVisible(!shaderProgramsIsVisible));
				globalDispatch(shaderProgramActions.updateSelectedShaderProgram(null));
			}}
			isSelected={shaderProgramsIsVisible}
			name={"Shader programs"}
			icon={iconShaderProgram}>
			{props.shaderPrograms.map(
				shaderProgram =>
					<ShaderProgramItem
						isSelected={props.selectedShaderProgram?.id === shaderProgram.id}
						onClick={shaderProgram => globalDispatch(shaderProgramActions.updateSelectedShaderProgram(shaderProgram))}
						onContext={(x, y, shaderProgram) => {
							globalDispatch(contextMenuActions.updateShaderProgramX(x));
							globalDispatch(contextMenuActions.updateShaderProgramY(y));
							globalDispatch(contextMenuActions.updateSelectedShaderProgram(shaderProgram));
							globalDispatch(contextMenuActions.updateShaderProgramIsDisplayed(true));
							globalDispatch(shaderProgramActions.updateSelectedShaderProgram(null));
						}}
						key={shaderProgram.id}
						shaderProgram={shaderProgram}/>)}
		</HierarchyItem>
	);
}

export default ShaderProgramsHierarchyItem;