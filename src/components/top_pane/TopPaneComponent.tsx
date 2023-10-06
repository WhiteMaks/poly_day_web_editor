import {FC} from "react";
import CreateReleaseButton from "./actions/CreateReleaseButton";
import FlexboxWrapper from "../wrappers/FlexboxWrapper";
import style from "./top_pane.module.css";
import ReleaseTabsContainer from "./containers/ReleaseTabsContainer";
import BusClient from "../../service_bus/BusClient";

interface TopPaneComponentProps {
	bus: BusClient
}

const TopPaneComponent: FC<TopPaneComponentProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			<CreateReleaseButton
				onClick={() => console.log("create release click")}/>
			<ReleaseTabsContainer
				selectOnReleaseTab={() => console.log("selected tab")}/>
		</FlexboxWrapper>
	);

}

export default TopPaneComponent;