import {FC} from "react";
import BlockWrapper from "../../../../common/wrappers/BlockWrapper";
import style from "./side_pane.module.css";
import Title from "./Title";
import ReactComponentProps from "../../../../common/ReactComponentProps";

interface SidePaneProps extends ReactComponentProps {
	title: string;
}

const SidePane: FC<SidePaneProps> = (props) => {

	return (
		<BlockWrapper
			className={style.wrapper}>
			<Title
				value={props.title}/>
			{props.children}
		</BlockWrapper>
	);

}

export default SidePane;