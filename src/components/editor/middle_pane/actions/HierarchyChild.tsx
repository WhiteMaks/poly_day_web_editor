import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";

interface HierarchyChildProps {
	name: string
}

const HierarchyChild: FC<HierarchyChildProps> = (props) => {

	return (
		<FlexboxWrapper>
			{props.name}
		</FlexboxWrapper>
	);

}

export default HierarchyChild;