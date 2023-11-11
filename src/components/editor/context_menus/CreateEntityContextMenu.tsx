import {FC} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import BusClient from "../../../service_bus/BusClient";
import BaseContextMenu from "../../common/actions/BaseContextMenu";
import ContextMenuAction from "../../common/actions/ContextMenuAction";

interface CreateEntityContextMenuProps {
	bus: BusClient;
}

const CreateEntityContextMenu: FC<CreateEntityContextMenuProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		createEntityX,
		createEntityY
	} = useGlobalSelector(state => state.contextMenuReducer);

	const clickOnUotSide = () => {
		globalDispatch(contextMenuActions.updateCreateEntityIsDisplayed(false));
	}

	return (
		<BaseContextMenu
			clickOnOutSide={clickOnUotSide}
			positionY={createEntityY}
			positionX={createEntityX}>
			<ContextMenuAction
				name={"Create folder"}
				onClick={() => {
					console.log("create folder");
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create model"}
				onClick={() => {
					console.log("create model");
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create shader"}
				onClick={() => {
					console.log("create shader");
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create script"}
				onClick={() => {
					console.log("create script");
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create sound"}
				onClick={() => {
					console.log("create sound");
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create music"}
				onClick={() => {
					console.log("create music");
					clickOnUotSide();
				}}/>
		</BaseContextMenu>
	);

}

export default CreateEntityContextMenu;