import {FC} from "react";
import style from "./action.module.css";
import BlockWrapper from "../wrappers/BlockWrapper";

interface ContextMenuActionProps {
	name: string
	onClick: () => void;
}

const ContextMenuAction: FC<ContextMenuActionProps> = (props) => {

	return (
		<BlockWrapper
			className={style.context_menu_action}
			onClick={props.onClick}>
			{props.name}
		</BlockWrapper>
	);
}

export default ContextMenuAction;