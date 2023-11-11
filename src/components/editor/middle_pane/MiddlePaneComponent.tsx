import {FC} from "react";
import FlexboxWrapper from "../../common/wrappers/FlexboxWrapper";
import style from "./midle_pane.module.css";
import Hierarchy from "./Hierarchy";
import Window from "./Window";
import ComponentSetup from "./ComponentSetup";

const MiddlePaneComponent: FC = () => {

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			<Hierarchy/>
			<Window/>
			<ComponentSetup/>
		</FlexboxWrapper>
	);
	
}

export default MiddlePaneComponent;