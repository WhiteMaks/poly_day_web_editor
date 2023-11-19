import {FC} from "react";
import style from "./actions.module.css";
import fullScreenIcon from "../../../../resources/icons/full_screen.svg";
import BaseIconButton from "../../../common/actions/BaseIconButton";

const FullScreenButton: FC = () => {

	return (
		<BaseIconButton
			className={style.button}
			description={"Full screen"}
			iconPath={fullScreenIcon}/>
	);

}

export default FullScreenButton;