import {FC, useEffect} from "react";
import {modalActions} from "../../../state/modal/ModalReducer";
import CancelButton from "./actions/CancelButton";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import BusClient from "../../../service_bus/BusClient";
import SaveButton from "./actions/SaveButton";
import {sourceActions} from "../../../state/develop/source/SourceReducer";
import UploadFile from "./actions/UploadFile";

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
		globalDispatch(sourceActions.updateNewModelSource(""));
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
						globalDispatch(modalActions.updateEditModelSourceIsDisplayed(false));
					}}/>,
				<CancelButton
					onClick={() => globalDispatch(modalActions.updateEditModelSourceIsDisplayed(false))}/>
			]}>
			{model ?
				<UploadFile
					title={selectedEntity!.name}
					onDelete={() => globalDispatch(sourceActions.updateNewModelSource(""))}
					onUpload={base64 => globalDispatch(sourceActions.updateNewModelSource(base64))}
					newModelSourceBase64={newModelSource}/> : null}
		</Modal>
	);

}

export default EditModelSourceModal;