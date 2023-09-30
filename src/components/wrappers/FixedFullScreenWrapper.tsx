import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import style from "./wrappers.module.css";

const FixedFullScreenWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<div className={style.fixed_full_screen}>
			{props.children}
		</div>
	);

}

export default FixedFullScreenWrapper;