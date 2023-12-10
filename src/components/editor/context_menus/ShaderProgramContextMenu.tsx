import {FC} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import ContextMenu from "../../common/actions/ContextMenu";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import BusClient from "../../../service_bus/BusClient";

interface ShaderProgramContextMenuProps {
	bus: BusClient;
}

const ShaderProgramContextMenu: FC<ShaderProgramContextMenuProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		shaderProgramX,
		shaderProgramY,
		selectedShaderProgram
	} = useGlobalSelector(state => state.contextMenuReducer);

	return (
		<ContextMenu
			clickOnDelete={() => props.bus.getDeveloperService().deleteShaderProgram10(selectedShaderProgram.id)}
			clickOnOutSide={() => globalDispatch(contextMenuActions.updateShaderProgramIsDisplayed(false))}
			positionY={shaderProgramY}
			positionX={shaderProgramX}/>
	);
}

export default ShaderProgramContextMenu;