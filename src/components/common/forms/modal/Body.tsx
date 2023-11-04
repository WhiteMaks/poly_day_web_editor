import React, {FC} from "react";
import ReactComponentProps from "../../ReactComponentProps";
import style from "./modal.module.css";
import BlockWrapper from "../../wrappers/BlockWrapper";

const Body: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper
			className={style.body}>
			{props.children}
		</BlockWrapper>
	);

}

export default Body;