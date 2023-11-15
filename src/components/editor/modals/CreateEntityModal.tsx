import {FC} from "react";
import Modal from "../../common/forms/modal/Modal";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {modalActions} from "../../../state/modal/ModalReducer";
import BusClient from "../../../service_bus/BusClient";
import CancelButton from "./actions/CancelButton";
import CreateButton from "./actions/CreateButton";
import TextInputWithName from "./actions/TextInputWithName";
import {entityActions} from "../../../state/develop/entity/EntityReducer";

interface CreateEntityModalProps {
	bus: BusClient
}

const CreateEntityModal: FC<CreateEntityModalProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		newEntityName,
		newEntityType,
		parentEntity
	} = useGlobalSelector(state => state.entityReducer)

	const getParentEntityId = () => {
		if (parentEntity) {
			return parentEntity.id;
		}
		return 0;
	}

	return (
		<Modal
			name={"Adding an entity: " + newEntityType}
			onClose={() => globalDispatch(modalActions.updateCreateEntityIsDisplayed(false))}
			actions={[
				<CreateButton
					onClick={() => {
						props.bus.getDeveloperService().createEntity10(newEntityName, newEntityType, getParentEntityId());
						globalDispatch(modalActions.updateCreateEntityIsDisplayed(false));
					}}/>,
				<CancelButton
					onClick={() => globalDispatch(modalActions.updateCreateEntityIsDisplayed(false))}/>
			]}>
			<TextInputWithName
				name={"Enter the name:"}
				value={newEntityName}
				onChange={value => globalDispatch(entityActions.updateNewEntityName(value))}/>
		</Modal>
	);

}

export default CreateEntityModal;