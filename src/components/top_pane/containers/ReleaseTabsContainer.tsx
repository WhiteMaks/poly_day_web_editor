import {FC} from "react";
import FlexboxWrapper from "../../wrappers/FlexboxWrapper";

interface ReleaseTabsContainerProps {
	selectOnReleaseTab: () => void;
}

const ReleaseTabsContainer: FC<ReleaseTabsContainerProps> = (props) => {

	return (
		<FlexboxWrapper>
			контаинер для релизов
		</FlexboxWrapper>
	);

}

export default ReleaseTabsContainer;