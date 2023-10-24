import {FC} from "react";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch} from "../../../state/store";
import {modalActions} from "../../../state/modal/ModalReducer";
import BusClient from "../../../service_bus/BusClient";

interface CreateReleaseModalProps {
	bus: BusClient
}

const CreateReleaseModal: FC<CreateReleaseModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();

	return (
		<Modal
			name={"Adding a release"}
			onClose={() => globalDispatch(modalActions.updateCreateReleaseIsDisplayed(false))}
			actions={[]}>
		</Modal>
	);

}

export default CreateReleaseModal;