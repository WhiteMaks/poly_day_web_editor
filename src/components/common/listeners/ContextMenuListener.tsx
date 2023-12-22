import {FC} from "react";
import BusClient from "../../../service_bus/BusClient";
import {useGlobalSelector} from "../../../state/store";
import ReleaseTabContextMenu from "../../editor/context_menus/ReleaseTabContextMenu";
import CreateEntityContextMenu from "../../editor/context_menus/CreateEntityContextMenu";
import EntityObjectContextMenu from "../../editor/context_menus/EntityObjectContextMenu";
import ShaderProgramContextMenu from "../../editor/context_menus/ShaderProgramContextMenu";
import ShaderProgramObjectContextMenu from "../../editor/context_menus/ShaderProgramObjectContextMenu";

interface ContextMenuListenerProps {
	bus: BusClient
}

const ContextMenuListener: FC<ContextMenuListenerProps> = (props) => {
	const {
		releaseTabIsDisplayed,
		createEntityIsDisplayed,
		entityObjectIsDisplayed,
		shaderProgramIsDisplayed,
		shaderProgramObjectIsDisplayed,
	} = useGlobalSelector(state => state.contextMenuReducer);

	if (releaseTabIsDisplayed) {
		return (
			<ReleaseTabContextMenu
				bus={props.bus}/>
		);
	}

	if (createEntityIsDisplayed) {
		return (
			<CreateEntityContextMenu
				bus={props.bus}/>
		);
	}

	if (entityObjectIsDisplayed) {
		return (
			<EntityObjectContextMenu
				bus={props.bus}/>
		);
	}

	if (shaderProgramIsDisplayed) {
		return (
			<ShaderProgramContextMenu
				bus={props.bus}/>
		);
	}

	if (shaderProgramObjectIsDisplayed) {
		return (
			<ShaderProgramObjectContextMenu
				bus={props.bus}/>
		);
	}

	return null;

}

export default ContextMenuListener;