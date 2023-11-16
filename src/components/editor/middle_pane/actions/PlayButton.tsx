import {FC} from "react";
import style from "./actions.module.css";
import playIcon from "../../../../resources/icons/play.svg";
import BaseIconButton from "../../../common/actions/BaseIconButton";

const PlayButton: FC = () => {

	return (
		<BaseIconButton
			className={style.wrapper}
			description={"Play"}
			iconPath={playIcon}/>
	);

}

export default PlayButton;