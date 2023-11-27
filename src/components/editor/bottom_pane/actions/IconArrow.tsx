import {FC} from "react";
import IconArrowUp from "../../../common/icons/IconArrowUp";
import style from "./actions.module.css";
import IconArrowDown from "../../../common/icons/IconArrowDown";

interface IconArrowProps {
	isActive: boolean;
	onClick: () => void;
}

const IconArrow: FC<IconArrowProps> = (props) => {

	if (props.isActive) {
		return (
			<IconArrowUp
				onClick={props.onClick}
				className={style.folder_object_arrow_icon}/>
		);
	}

	return (
		<IconArrowDown
			onClick={props.onClick}
			className={style.folder_object_arrow_icon}/>
	);
}

export default IconArrow;