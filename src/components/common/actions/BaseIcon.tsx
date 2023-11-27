import {FC} from "react";
import style from "./action.module.css";
import ReactComponentProps from "../ReactComponentProps";
import BlockWrapper from "../wrappers/BlockWrapper";

interface BaseIconProps extends ReactComponentProps {
	description: string;
	iconPath: string;
}

const BaseIcon: FC<BaseIconProps> = (props) => {

	return (
		<BlockWrapper
			onClick={props.onClick}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			className={`${props.className} ${style.base_icon}`}>
			<img
				alt={props.description}
				src={props.iconPath}/>
			{props.children}
		</BlockWrapper>
	);

}

export default BaseIcon;