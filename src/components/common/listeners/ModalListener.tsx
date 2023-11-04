import {FC} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";
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

	return (
		<BlockWrapper>
			{createReleaseIsDisplayed ?
				<CreateReleaseModal
					bus={props.bus}/> : null}
		</BlockWrapper>
	);

}

export default ModalListener;