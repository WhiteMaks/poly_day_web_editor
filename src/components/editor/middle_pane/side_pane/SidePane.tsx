import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./side_pane.module.css";

interface SidePaneProps {
	title: string;
}

const SidePane: FC<SidePaneProps> = (props) => {

	return (
		<BlockWrapper
			className={style.wrapper}>
			{/*{props.title}*/}
		</BlockWrapper>
	);

}

export default SidePane;