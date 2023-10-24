import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import FixedFullScreenWrapper from "./FixedFullScreenWrapper";
import style from "./wrappers.module.css";

const FadeWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<FixedFullScreenWrapper
			className={style.fade}>
			{props.children}
		</FixedFullScreenWrapper>
	);

}

export default FadeWrapper;