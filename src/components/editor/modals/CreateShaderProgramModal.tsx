import {FC} from "react";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {modalActions} from "../../../state/modal/ModalReducer";
import BusClient from "../../../service_bus/BusClient";
import CancelButton from "./actions/CancelButton";
import CreateButton from "./actions/CreateButton";
import TextInputWithName from "./actions/TextInputWithName";
import {shaderProgramActions} from "../../../state/develop/shader_program/ShaderProgramReducer";

interface CreateShaderProgramModalProps {
	bus: BusClient
}

const CreateShaderProgramModal: FC<CreateShaderProgramModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		newShaderProgramName,
		shaderEntity,
		releaseId
	} = useGlobalSelector(state => state.shaderProgramReducer)

	return (
		<Modal
			name={"Adding a shader program with shader: " + shaderEntity.name}
			onClose={() => globalDispatch(modalActions.updateCreateShaderProgramIsDisplayed(false))}
			actions={[
				<CreateButton
					onClick={() => {
						props.bus.getDeveloperService().createShaderProgram10(newShaderProgramName, releaseId, shaderEntity.id);
						globalDispatch(modalActions.updateCreateShaderProgramIsDisplayed(false));
					}}/>,
				<CancelButton
					onClick={() => globalDispatch(modalActions.updateCreateShaderProgramIsDisplayed(false))}/>
			]}>
			<TextInputWithName
				name={"Enter the name:"}
				value={newShaderProgramName}
				onChange={value => globalDispatch(shaderProgramActions.updateNewShaderProgramName(value))}/>
		</Modal>
	);

}

export default CreateShaderProgramModal;