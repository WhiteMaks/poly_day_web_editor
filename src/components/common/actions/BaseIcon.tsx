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
			className={`${props.className} ${style.base_icon}`}>
			<img
				alt={props.description}
				src={props.iconPath}/>
		</BlockWrapper>
	);

}

export default BaseIcon;