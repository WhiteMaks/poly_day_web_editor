import {FC} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import ContextMenu from "../../common/actions/ContextMenu";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import BusClient from "../../../service_bus/BusClient";

interface EntityObjectContextMenuProps {
	bus: BusClient
}

const EntityObjectContextMenu: FC<EntityObjectContextMenuProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		entityObjectX,
		entityObjectY,
		selectedEntity
	} = useGlobalSelector(state => state.contextMenuReducer);

	return (
		<ContextMenu
			clickOnDelete={() => props.bus.getDeveloperService().deleteEntity10(selectedEntity.id)}
			clickOnOutSide={() => globalDispatch(contextMenuActions.updateEntityObjectIsDisplayed(false))}
			positionY={entityObjectY}
			positionX={entityObjectX}/>
	);
}

export default EntityObjectContextMenu;