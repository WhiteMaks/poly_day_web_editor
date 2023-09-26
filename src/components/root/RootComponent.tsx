import {FC} from "react";
import style from "./root.module.css";
import ReactComponentProps from "../ReactComponentProps";

const RootComponent: FC<ReactComponentProps> = (props) => {

	return (
		<div className={style.wrapper}>
			{props.children}
		</div>
	);

}

export default RootComponent;