import {FC} from "react";
import TopPaneComponent from "../components/editor/top_pane/TopPaneComponent";
import MiddlePaneComponent from "../components/editor/middle_pane/MiddlePaneComponent";
import BottomPaneComponent from "../components/editor/bottom_pane/BottomPaneComponent";
import BusClient from "../service_bus/BusClient";
import BusListener from "../components/common/listeners/BusListener";
import ModalListener from "../components/common/listeners/ModalListener";
import ContextMenuListener from "../components/common/listeners/ContextMenuListener";
import EditorWrapper from "../components/editor/wrappers/EditorWrapper";

const EditorPage: FC = () => {
	const bus = new BusClient(process.env.REACT_APP_GATEWAY_HOST ?? "");

	return (
		<EditorWrapper>
			<TopPaneComponent/>
			<MiddlePaneComponent/>
			<BottomPaneComponent/>
			<BusListener
				bus={bus}/>
			<ModalListener
				bus={bus}/>
			<ContextMenuListener
				bus={bus}/>
		</EditorWrapper>
	)

}

export default EditorPage;