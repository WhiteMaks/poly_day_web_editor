import {FC} from "react";
import {useGlobalSelector} from "../../../state/store";
import CreateReleaseModal from "../../editor/modals/CreateReleaseModal";
import BusClient from "../../../service_bus/BusClient";
import CreateEntityModal from "../../editor/modals/CreateEntityModal";
import EditModelSourceModal from "../../editor/modals/EditModelSourceModal";
import EditShaderSourceModal from "../../editor/modals/EditShaderSourceModal";
import CreateShaderProgramModal from "../../editor/modals/CreateShaderProgramModal";

interface ModalListenerProps {
	bus: BusClient
}

const ModalListener: FC<ModalListenerProps> = (props) => {
	const {
		createReleaseIsDisplayed,
		createEntityIsDisplayed,
		editModelSourceIsDisplayed,
		editShaderSourceIsDisplayed,
		createShaderProgramIsDisplayed
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

	if (editShaderSourceIsDisplayed) {
		return (
			<EditShaderSourceModal
				bus={props.bus}/>
		);
	}

	if (createShaderProgramIsDisplayed) {
		return (
			<CreateShaderProgramModal
				bus={props.bus}/>
		);
	}

	return null;
}

export default ModalListener;