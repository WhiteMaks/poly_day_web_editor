import {FC} from "react";
import SidePane from "./side_pane/SidePane";

interface ComponentSetupProps {

}

const ComponentSetup: FC<ComponentSetupProps> = () => {

	return (
		<SidePane
			title={"ComponentSetup"}/>
	);

}

export default ComponentSetup;