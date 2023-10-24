import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import style from "./action.module.css";

interface IconButtonProps extends ReactComponentProps {
	description: string;
	iconPath: string;
}

const IconButton: FC<IconButtonProps> = (props) => {

	return (
		<button
			className={`${props.className} ${style.icon_button}`}
			onClick={props.onClick}>
			<img
				alt={props.description}
				src={props.iconPath}/>
		</button>
	);

}

export default IconButton;