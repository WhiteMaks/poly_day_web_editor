import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./window.module.css";
import PlayButton from "../actions/PlayButton";
import PauseButton from "../actions/PauseButton";
import FullScreenButton from "../actions/FullScreenButton";
import ConnectionIndicator from "./ConnectionIndicator";

interface ActionsPaneProps {

}

const ActionsPane: FC<ActionsPaneProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.actions_pane}>
			<PlayButton/>
			<PauseButton/>
			<FullScreenButton/>
			<ConnectionIndicator/>
		</FlexboxWrapper>
	);

}

export default ActionsPane;