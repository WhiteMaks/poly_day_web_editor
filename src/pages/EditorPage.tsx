import {FC} from "react";
import Common from "../core/Common";
import TopPaneComponent from "../components/top_pane/TopPaneComponent";
import MiddlePaneComponent from "../components/middle_pane/MiddlePaneComponent";
import BottomPaneComponent from "../components/bottom_pane/BottomPaneComponent";
import BusClient from "../service_bus/BusClient";
import BusListenerComponent from "../components/bus_listener/BusListenerComponent";

const EditorPage: FC = () => {
	const bus = new BusClient(process.env.REACT_APP_GATEWAY_HOST ? process.env.REACT_APP_GATEWAY_HOST: "");

	bus.getAuthenticate()
		.identifyUser10(Common.getTokenInLocalStorage());

	return (
		<BusListenerComponent
			bus={bus}>
			<TopPaneComponent
				bus={bus}/>
			<MiddlePaneComponent/>
			<BottomPaneComponent/>
		</BusListenerComponent>
	)

}

export default EditorPage;