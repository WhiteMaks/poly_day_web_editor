import {FC} from "react";
import style from "./actions.module.css";
import BaseIconButton from "../../../common/actions/BaseIconButton";
import pauseIcon from "../../../../resources/icons/pause.svg";

const PauseButton: FC = () => {

	return (
		<BaseIconButton
			className={style.wrapper}
			description={"Pause"}
			iconPath={pauseIcon}/>
	);

}

export default PauseButton;