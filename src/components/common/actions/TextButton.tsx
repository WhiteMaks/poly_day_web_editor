import {FC} from "react";
import style from "./action.module.css";
import ReactComponentProps from "../ReactComponentProps";

interface TextButtonProps extends ReactComponentProps {
	name: string
}

const TextButton: FC<TextButtonProps> = (props) => {

	return (
		<button
			className={`${props.className} ${style.text_button}`}
			onClick={props.onClick}>
			{props.name}
		</button>
	);

}

export default TextButton;