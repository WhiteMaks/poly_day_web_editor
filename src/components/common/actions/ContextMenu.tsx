import {FC} from "react";
import BaseContextMenu from "./BaseContextMenu";
import ContextMenuAction from "./ContextMenuAction";

interface ContextMenuProps {
	positionX: number;
	positionY: number;

	clickOnDelete: () => void;
	clickOnOutSide: () => void;
}

const ContextMenu: FC<ContextMenuProps> = (props) => {

	return (
		<BaseContextMenu
			clickOnOutSide={props.clickOnOutSide}
			positionX={props.positionX}
			positionY={props.positionY}>
			<ContextMenuAction
				name={"Delete"}
				onClick={() => {
					props.clickOnDelete();
					props.clickOnOutSide();
				}}/>
			<ContextMenuAction
				name={"Rename"}
				onClick={props.clickOnOutSide}/>
		</BaseContextMenu>
	);

}

export default ContextMenu;