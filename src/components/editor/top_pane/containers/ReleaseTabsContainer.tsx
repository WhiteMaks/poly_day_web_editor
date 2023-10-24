import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {useGlobalSelector} from "../../../../state/store";
import ReleaseTab from "../actions/ReleaseTab";
import style from "./release_tabs_container.module.css";
import {Release} from "../../../../service_bus/microservices/developer_service/models/GetReleases10BodyResponse";

interface ReleaseTabsContainerProps {
	onSelectReleaseTab: (selectedRelease: Release) => void;
}

const ReleaseTabsContainer: FC<ReleaseTabsContainerProps> = (props) => {
	const {
		releases
	} = useGlobalSelector(state => state.releaseReducer);

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			{releases.map(
				release =>
					<ReleaseTab
						onSelect={props.onSelectReleaseTab}
						key={release.id}
						release={release}/>
			)}
		</FlexboxWrapper>
	);

}

export default ReleaseTabsContainer;