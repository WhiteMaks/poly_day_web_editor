import {FC} from "react";
import BusClient from "../../../service_bus/BusClient";
import {useGlobalSelector} from "../../../state/store";
import ReleaseTabContextMenu from "../../editor/context_menus/ReleaseTabContextMenu";
import CreateEntityContextMenu from "../../editor/context_menus/CreateEntityContextMenu";

interface ContextMenuListenerProps {
	bus: BusClient
}

const ContextMenuListener: FC<ContextMenuListenerProps> = (props) => {
	const {
		releaseTabIsDisplayed,
		createEntityIsDisplayed
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

	return null;

}

export default ContextMenuListener;