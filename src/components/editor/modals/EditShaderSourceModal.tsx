import {FC, useEffect} from "react";
import {modalActions} from "../../../state/modal/ModalReducer";
import CancelButton from "./actions/CancelButton";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import BusClient from "../../../service_bus/BusClient";
import SaveButton from "./actions/SaveButton";
import {sourceActions} from "../../../state/develop/source/SourceReducer";

interface EditShaderSourceModalProps {
	bus: BusClient
}

const EditShaderSourceModal: FC<EditShaderSourceModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		selectedEntity
	} = useGlobalSelector(state => state.entityReducer)
	const {
		newVertexShader,
		newFragmentShader,
	} = useGlobalSelector(state => state.sourceReducer)

	useEffect(() => {
		props.bus.getDeveloperService()
			.getShaderSource10(selectedEntity!.id);
	}, [props.bus, selectedEntity]);

	useEffect(() => () => {
		globalDispatch(sourceActions.updateShader(null));
		globalDispatch(sourceActions.updateNewVertexShader(""));
		globalDispatch(sourceActions.updateNewFragmentShader(""));
	}, [globalDispatch]);

	return (
		<Modal
			name={"Shader filling: " + selectedEntity!.name}
			onClose={() => globalDispatch(modalActions.updateEditShaderSourceIsDisplayed(false))}
			actions={[
				<SaveButton
					onClick={() => {
						props.bus.getDeveloperService()
							.saveShaderSource10(selectedEntity!.id, newVertexShader, newFragmentShader);
						globalDispatch(modalActions.updateEditShaderSourceIsDisplayed(false));
					}}/>,
				<CancelButton
					onClick={() => globalDispatch(modalActions.updateEditShaderSourceIsDisplayed(false))}/>
			]}>
		</Modal>
	);

}

export default EditShaderSourceModal;