import {FC, useEffect} from "react";
import {modalActions} from "../../../state/modal/ModalReducer";
import CancelButton from "./actions/CancelButton";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import BusClient from "../../../service_bus/BusClient";
import SaveButton from "./actions/SaveButton";
import {sourceActions} from "../../../state/develop/source/SourceReducer";

interface EditModelSourceModalProps {
	bus: BusClient
}

const EditModelSourceModal: FC<EditModelSourceModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		selectedEntity
	} = useGlobalSelector(state => state.entityReducer)
	const {
		model,
		newModelSource
	} = useGlobalSelector(state => state.sourceReducer)

	useEffect(() => {
		props.bus.getDeveloperService()
			.getModelSource10(selectedEntity!.id);
	}, [props.bus, selectedEntity]);

	useEffect(() => () => {
		globalDispatch(sourceActions.updateModel(null));
	}, [globalDispatch]);

	return (
		<Modal
			name={"Model filling"}
			onClose={() => globalDispatch(modalActions.updateEditModelSourceIsDisplayed(false))}
			actions={[
				<SaveButton
					onClick={() => {
						props.bus.getDeveloperService()
							.saveModelSource10(selectedEntity!.id, newModelSource);
					}}/>,
				<CancelButton
					onClick={() => globalDispatch(modalActions.updateEditModelSourceIsDisplayed(false))}/>
			]}>
			{model ? "Model" : "Loading"}
		</Modal>
	);

}

export default EditModelSourceModal;