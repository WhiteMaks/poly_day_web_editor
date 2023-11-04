import {FC} from "react";
import ContextMenu from "../../common/actions/ContextMenu";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import BusClient from "../../../service_bus/BusClient";

interface ReleaseTabContextMenuProps {
	bus: BusClient;
}

const ReleaseTabContextMenu: FC<ReleaseTabContextMenuProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		releaseTabX,
		releaseTabY,
		selectedRelease
	} = useGlobalSelector(state => state.contextMenuReducer);

	return (
		<ContextMenu
			clickOnDelete={() => props.bus.getDeveloperService().deleteRelease10(selectedRelease.id)}
			clickOnOutSide={() => globalDispatch(contextMenuActions.updateReleaseTabIsDisplayed(false))}
			positionY={releaseTabY}
			positionX={releaseTabX}/>
	);

}

export default ReleaseTabContextMenu;