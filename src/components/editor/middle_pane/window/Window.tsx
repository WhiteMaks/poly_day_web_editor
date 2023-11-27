import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./window.module.css";
import ActionsPane from "./ActionsPane";
import Viewport from "./Viewport";

const Window: FC = () => {

	return (
		<BlockWrapper
			className={style.wrapper}>
			<ActionsPane/>
			<Viewport/>
		</BlockWrapper>
	);

}

export default Window;