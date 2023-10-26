import {FC} from "react";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {modalActions} from "../../../state/modal/ModalReducer";
import BusClient from "../../../service_bus/BusClient";
import CancelButton from "./actions/CancelButton";
import CreateButton from "./actions/CreateButton";
import TextInputWithName from "./actions/TextInputWithName";
import {releaseActions} from "../../../state/develop/release/ReleaseReducer";

interface CreateReleaseModalProps {
	bus: BusClient
}

const CreateReleaseModal: FC<CreateReleaseModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		newReleaseName
	} = useGlobalSelector(state => state.releaseReducer)

	return (
		<Modal
			name={"Adding a release"}
			onClose={() => globalDispatch(modalActions.updateCreateReleaseIsDisplayed(false))}
			actions={[
				<CreateButton
					onClick={() => {
						props.bus.getDeveloperService().createRelease10(newReleaseName);
						globalDispatch(modalActions.updateCreateReleaseIsDisplayed(false));
					}}/>,
				<CancelButton
					onClick={() => globalDispatch(modalActions.updateCreateReleaseIsDisplayed(false))}/>
			]}>
			<TextInputWithName
				name={"Enter the name:"}
				value={newReleaseName}
				onChange={value => globalDispatch(releaseActions.updateNewReleaseName(value))}/>
		</Modal>
	);

}

export default CreateReleaseModal;