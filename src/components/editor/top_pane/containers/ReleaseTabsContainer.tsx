import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {useGlobalDispatch, useGlobalSelector} from "../../../../state/store";
import ReleaseTab from "../actions/ReleaseTab";
import style from "./release_tabs_container.module.css";
import {Release} from "../../../../service_bus/microservices/developer_service/models/release/GetReleases10BodyResponse";
import {contextMenuActions} from "../../../../state/context_menu/ContextMenuReducer";

interface ReleaseTabsContainerProps {
	onSelectReleaseTab: (selectedRelease: Release) => void;
}

const ReleaseTabsContainer: FC<ReleaseTabsContainerProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		releases
	} = useGlobalSelector(state => state.releaseReducer);

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			{releases.map(
				release =>
					<ReleaseTab
						onContext={(x, y, release) => {
							globalDispatch(contextMenuActions.updateReleaseTabX(x));
							globalDispatch(contextMenuActions.updateReleaseTabY(y));
							globalDispatch(contextMenuActions.updateSelectedRelease(release));
							globalDispatch(contextMenuActions.updateReleaseTabIsDisplayed(true));
						}}
						onSelect={props.onSelectReleaseTab}
						key={release.id}
						release={release}/>
			)}
		</FlexboxWrapper>
	);

}

export default ReleaseTabsContainer;