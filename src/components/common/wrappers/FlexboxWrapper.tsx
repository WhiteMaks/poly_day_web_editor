import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import BlockWrapper from "./BlockWrapper";
import style from "./wrappers.module.css";

const FlexboxWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper
			onClick={props.onClick}
			className={`${style.flexbox} ${props.className}`}>
			{props.children}
		</BlockWrapper>
	);

}

export default FlexboxWrapper;