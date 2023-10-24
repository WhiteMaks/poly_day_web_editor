import {FC} from "react";
import CreateReleaseButton from "./actions/CreateReleaseButton";
import FlexboxWrapper from "../wrappers/FlexboxWrapper";
import style from "./top_pane.module.css";
import ReleaseTabsContainer from "./containers/ReleaseTabsContainer";
import BusClient from "../../service_bus/BusClient";
import {useGlobalDispatch} from "../../state/store";
import {releaseActions} from "../../state/develop/release/ReleaseReducer";

interface TopPaneComponentProps {
	bus: BusClient
}

const TopPaneComponent: FC<TopPaneComponentProps> = (props) => {
	const globalDispatch = useGlobalDispatch();

	props.bus.getDeveloperService()
		.getReleases10();

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			<CreateReleaseButton
				onClick={() => console.log("create release click")}/>
			<ReleaseTabsContainer
				onSelectReleaseTab={release => globalDispatch(releaseActions.updateSelectedRelease(release))}/>
		</FlexboxWrapper>
	);

}

export default TopPaneComponent;