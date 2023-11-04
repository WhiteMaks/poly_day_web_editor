import {FC} from "react";
import BusClient from "../../../service_bus/BusClient";
import BlockWrapper from "../wrappers/BlockWrapper";
import {useGlobalSelector} from "../../../state/store";
import ReleaseTabContextMenu from "../../editor/context_menus/ReleaseTabContextMenu";

interface ContextMenuListenerProps {
	bus: BusClient
}

const ContextMenuListener: FC<ContextMenuListenerProps> = (props) => {
	const {
		releaseTabIsDisplayed,
	} = useGlobalSelector(state => state.contextMenuReducer);

	return (
		<BlockWrapper>
			{releaseTabIsDisplayed ?
				<ReleaseTabContextMenu
					bus={props.bus}/> : null}
		</BlockWrapper>
	);

}

export default ContextMenuListener;