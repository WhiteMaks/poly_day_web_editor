import {FC} from "react";
import {Release} from "../../../../service_bus/microservices/developer_service/models/GetReleases10BodyResponse";
import {useGlobalSelector} from "../../../../state/store";
import TabWrapper from "../../wrappers/TabWrapper";

interface ReleaseTabProps {
	onContext: (clientX: number, clientY: number, release: Release) => void;
	onSelect: (selectedRelease: Release) => void;
	release: Release;
}

const ReleaseTab: FC<ReleaseTabProps> = (props) => {
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);

	return (
		<TabWrapper
			onContext={(clientX, clientY) => props.onContext(clientX, clientY, props.release)}
			onClick={() => props.onSelect(props.release)}
			isActive={selectedRelease?.id === props.release.id}
			name={props.release.name}/>
	);

}

export default ReleaseTab;