import {FC} from "react";
import IconButton from "./IconButton";
import ReactComponentProps from "../ReactComponentProps";
import style from "./action.module.css";

interface BaseIconButtonProps extends ReactComponentProps {
	description: string;
	iconPath: string;
}

const BaseIconButton: FC<BaseIconButtonProps> = (props) => {

	return (
		<IconButton
			className={style.base_button}
			onClick={props.onClick}
			description={props.description}
			iconPath={props.iconPath}/>
	);

}

export default BaseIconButton;