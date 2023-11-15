import {FC} from "react";
import IconArrowUp from "../../../common/icons/IconArrowUp";
import style from "./actions.module.css";
import IconArrowDown from "../../../common/icons/IconArrowDown";

interface IconArrowProps {
	isActive: boolean;
}

const IconArrow: FC<IconArrowProps> = (props) => {

	if (props.isActive) {
		return (
			<IconArrowUp
				className={style.folder_object_arrow_icon}/>
		);
	}

	return (
		<IconArrowDown
			className={style.folder_object_arrow_icon}/>
	);
}

export default IconArrow;