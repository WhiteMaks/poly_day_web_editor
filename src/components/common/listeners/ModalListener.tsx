import {FC} from "react";
import {useGlobalSelector} from "../../../state/store";
import CreateReleaseModal from "../../editor/modals/CreateReleaseModal";
import BusClient from "../../../service_bus/BusClient";
import CreateEntityModal from "../../editor/modals/CreateEntityModal";
import EditModelSourceModal from "../../editor/modals/EditModelSourceModal";

interface ModalListenerProps {
	bus: BusClient
}

const ModalListener: FC<ModalListenerProps> = (props) => {
	const {
		createReleaseIsDisplayed,
		createEntityIsDisplayed,
		editModelSourceIsDisplayed
	} = useGlobalSelector(state => state.modalReducer);

	if (createReleaseIsDisplayed) {
		return (
			<CreateReleaseModal
				bus={props.bus}/>
		);
	}

	if (createEntityIsDisplayed) {
		return (
			<CreateEntityModal
				bus={props.bus}/>
		);
	}

	if (editModelSourceIsDisplayed) {
		return (
			<EditModelSourceModal
				bus={props.bus}/>
		);
	}

	return null;
}

export default ModalListener;