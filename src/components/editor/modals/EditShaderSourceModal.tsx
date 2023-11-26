import {FC, useEffect, useState} from "react";
import {modalActions} from "../../../state/modal/ModalReducer";
import CancelButton from "./actions/CancelButton";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import BusClient from "../../../service_bus/BusClient";
import SaveButton from "./actions/SaveButton";
import {sourceActions} from "../../../state/develop/source/SourceReducer";
import ShaderTabsContainer from "./containers/ShaderTabsContainer";
import ShaderType from "../../../core/enums/ShaderType";
import style from "./containers/containers.module.css";
import ShaderCode from "./actions/ShaderCode";

const shaders: ShaderType[] = [
	ShaderType.VERTEX,
	ShaderType.GEOMETRY,
	ShaderType.FRAGMENT
];

interface EditShaderSourceModalProps {
	bus: BusClient
}

const EditShaderSourceModal: FC<EditShaderSourceModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		selectedEntity
	} = useGlobalSelector(state => state.entityReducer)
	const {
		shader,
		newVertexShader,
		newFragmentShader,
		selectedShaderType
	} = useGlobalSelector(state => state.sourceReducer);

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
			bodyClass={style.body_modal}
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
			<ShaderTabsContainer
				selectedShader={selectedShaderType}
				onSelectShaderTab={shader => globalDispatch(sourceActions.updateSelectedShaderType(shader))}
				shaders={shaders}/>
			<ShaderCode
				vertexShader={shader ? shader.vertex_shader : ""}
				geometryShader={""}
				fragmentShader={shader ? shader.fragment_shader : ""}
				onChange={value => {
					globalDispatch(sourceActions.updateNewVertexShader(value))
				}}/>
		</Modal>
	);

}

export default EditShaderSourceModal;