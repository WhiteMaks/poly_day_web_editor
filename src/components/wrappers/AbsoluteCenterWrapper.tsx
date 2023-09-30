import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import style from "./wrappers.module.css";

const AbsoluteCenterWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<div className={style.absolute_centre}>
			{props.children}
		</div>
	);

}

export default AbsoluteCenterWrapper