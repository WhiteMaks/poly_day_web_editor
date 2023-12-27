import {FC} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import ContextMenu from "../../common/actions/ContextMenu";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import BusClient from "../../../service_bus/BusClient";

interface ShaderProgramObjectContextMenuProps {
	bus: BusClient;
}

const ShaderProgramObjectContextMenu: FC<ShaderProgramObjectContextMenuProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		shaderProgramObjectX,
		shaderProgramObjectY,
		selectedShaderProgramObject
	} = useGlobalSelector(state => state.contextMenuReducer);

	return (
		<ContextMenu
			clickOnDelete={() => props.bus.getDeveloperService().deleteShaderProgramObject10(selectedShaderProgramObject.id)}
			clickOnOutSide={() => globalDispatch(contextMenuActions.updateShaderProgramObjectIsDisplayed(false))}
			positionY={shaderProgramObjectY}
			positionX={shaderProgramObjectX}/>
	);
}

export default ShaderProgramObjectContextMenu;