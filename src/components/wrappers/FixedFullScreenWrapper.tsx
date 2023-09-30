import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import style from "./wrappers.module.css";
import BlockWrapper from "./BlockWrapper";

const FixedFullScreenWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper
			className={style.fixed_full_screen}>
			{props.children}
		</BlockWrapper>
	);

}

export default FixedFullScreenWrapper;