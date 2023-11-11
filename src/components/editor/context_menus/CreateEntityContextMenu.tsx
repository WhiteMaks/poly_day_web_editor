import {FC} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import BusClient from "../../../service_bus/BusClient";
import BaseContextMenu from "../../common/actions/BaseContextMenu";
import ContextMenuAction from "../../common/actions/ContextMenuAction";
import {entityActions} from "../../../state/develop/entity/EntityReducer";
import EntityType from "../../../service_bus/microservices/consts/EntityType";
import {modalActions} from "../../../state/modal/ModalReducer";

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
					globalDispatch(entityActions.updateNewEntityType(EntityType.FOLDER));
					globalDispatch(modalActions.updateCreateEntityIsDisplayed(true));
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create model"}
				onClick={() => {
					globalDispatch(entityActions.updateNewEntityType(EntityType.MODEL));
					globalDispatch(modalActions.updateCreateEntityIsDisplayed(true));
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create shader"}
				onClick={() => {
					globalDispatch(entityActions.updateNewEntityType(EntityType.SHADER));
					globalDispatch(modalActions.updateCreateEntityIsDisplayed(true));
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create script"}
				onClick={() => {
					globalDispatch(entityActions.updateNewEntityType(EntityType.SCRIPT));
					globalDispatch(modalActions.updateCreateEntityIsDisplayed(true));
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create sound"}
				onClick={() => {
					globalDispatch(entityActions.updateNewEntityType(EntityType.SOUND));
					globalDispatch(modalActions.updateCreateEntityIsDisplayed(true));
					clickOnUotSide();
				}}/>
			<ContextMenuAction
				name={"Create music"}
				onClick={() => {
					globalDispatch(entityActions.updateNewEntityType(EntityType.MUSIC));
					globalDispatch(modalActions.updateCreateEntityIsDisplayed(true));
					clickOnUotSide();
				}}/>
		</BaseContextMenu>
	);

}

export default CreateEntityContextMenu;