import {FC} from "react";
import FlexboxWrapper from "../../common/wrappers/FlexboxWrapper";
import style from "./midle_pane.module.css";
import Hierarchy from "./Hierarchy";
import Window from "./window/Window";
import ComponentSetup from "./ComponentSetup";
import BusClient from "../../../service_bus/BusClient";

interface MiddlePaneComponentProps {
	bus: BusClient
}

const MiddlePaneComponent: FC<MiddlePaneComponentProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			<Hierarchy
				bus={props.bus}/>
			<Window/>
			<ComponentSetup/>
		</FlexboxWrapper>
	);
	
}

export default MiddlePaneComponent;