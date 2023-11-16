import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./window.module.css";

const Viewport: FC = () => {

	return (
		<BlockWrapper
			className={style.viewport}>
		</BlockWrapper>
	);

}

export default Viewport;