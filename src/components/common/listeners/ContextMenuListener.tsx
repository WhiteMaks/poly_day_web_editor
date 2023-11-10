import {FC} from "react";
import BusClient from "../../../service_bus/BusClient";
import {useGlobalSelector} from "../../../state/store";
import ReleaseTabContextMenu from "../../editor/context_menus/ReleaseTabContextMenu";

interface ContextMenuListenerProps {
	bus: BusClient
}

const ContextMenuListener: FC<ContextMenuListenerProps> = (props) => {
	const {
		releaseTabIsDisplayed,
	} = useGlobalSelector(state => state.contextMenuReducer);

	if (releaseTabIsDisplayed) {
		return (
			<ReleaseTabContextMenu
				bus={props.bus}/>
		);
	}

	return null;

}

export default ContextMenuListener;