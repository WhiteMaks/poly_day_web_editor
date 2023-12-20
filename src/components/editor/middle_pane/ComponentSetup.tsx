import {FC} from "react";
import SidePane from "./support/side_pane/SidePane";

interface ComponentSetupProps {

}

const ComponentSetup: FC<ComponentSetupProps> = () => {

	return (
		<SidePane
			title={"Editing a component"}>
		</SidePane>
	);

}

export default ComponentSetup;