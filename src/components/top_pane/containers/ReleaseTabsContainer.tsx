import {FC} from "react";
import FlexboxWrapper from "../../wrappers/FlexboxWrapper";

interface ReleaseTabsContainerProps {
	onReleaseTabSelect: () => void;
}

const ReleaseTabsContainer: FC<ReleaseTabsContainerProps> = (props) => {

	return (
		<FlexboxWrapper>
			контаинер для релизов
		</FlexboxWrapper>
	);

}

export default ReleaseTabsContainer;