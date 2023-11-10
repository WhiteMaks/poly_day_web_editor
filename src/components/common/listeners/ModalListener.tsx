import {FC} from "react";
import {useGlobalSelector} from "../../../state/store";
import CreateReleaseModal from "../../editor/modals/CreateReleaseModal";
import BusClient from "../../../service_bus/BusClient";

interface ModalListenerProps {
	bus: BusClient
}

const ModalListener: FC<ModalListenerProps> = (props) => {
	const {
		createReleaseIsDisplayed
	} = useGlobalSelector(state => state.modalReducer);

	if (createReleaseIsDisplayed) {
		return (
			<CreateReleaseModal
				bus={props.bus}/>
		);
	}

	return null;
}

export default ModalListener;