import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import style from "./wrappers.module.css";
import BlockWrapper from "./BlockWrapper";

const AbsoluteCenterWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper
			className={style.absolute_centre}>
			{props.children}
		</BlockWrapper>
	);

}

export default AbsoluteCenterWrapper