import {FC} from "react";
import BlockWrapper from "../../wrappers/BlockWrapper";
import {Release} from "../../../service_bus/microservices/developer_service/models/GetReleases10BodyResponse";
import style from "./release_tab.module.css";
import {useGlobalSelector} from "../../../state/store";

interface ReleaseTabProps {
	onSelect: (selectedRelease: Release) => void;
	release: Release;
}

const ReleaseTab: FC<ReleaseTabProps> = (props) => {
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);

	return (
		<BlockWrapper
			onClick={() => props.onSelect(props.release)}
			className={`${style.wrapper} ${selectedRelease?.id === props.release.id ? style.active : style.not_active}`}>
			{props.release.name}
		</BlockWrapper>
	);

}

export default ReleaseTab;