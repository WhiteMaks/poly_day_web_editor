import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";

const BlockWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<div
			className={props.className}>
			{props.children}
		</div>
	);

}

export default BlockWrapper;