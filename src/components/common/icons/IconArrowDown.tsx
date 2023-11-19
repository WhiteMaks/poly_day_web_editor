import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import BlockWrapper from "../wrappers/BlockWrapper";

const IconArrowDown: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper
			onClick={props.onClick}>
			<svg
				className={props.className}
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="8"
				viewBox="0 0 14 8"
				fill="none">
				<path
					d="M1 1L7 7L13 1"
					stroke="currentColor"
					strokeLinecap="square"
					strokeLinejoin="round"/>
			</svg>
		</BlockWrapper>
	);

}

export default IconArrowDown;