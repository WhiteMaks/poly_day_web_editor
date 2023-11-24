import {FC} from "react";
import style from "./bottom_pane.module.css";
import EntityObjectsContainer from "./containers/EntityObjectsContainer";
import {entityActions} from "../../../state/develop/entity/EntityReducer";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import {useGlobalDispatch} from "../../../state/store";
import EntityType from "../../../service_bus/microservices/consts/EntityType";
import {modalActions} from "../../../state/modal/ModalReducer";

interface EntityExplorerProps {
	onContext: (clientX: number, clientY: number) => void;
}

const EntityExplorer: FC<EntityExplorerProps> = (props) => {
	const globalDispatch = useGlobalDispatch();

	return (
		<BlockWrapper
			onContextMenu={event => {
				event.preventDefault();

				const className = (event.target as Element).className.toString();

				if (className.startsWith("bottom") || className.startsWith("wrapper")) {
					props.onContext(event.clientX, event.clientY);
				}
			}}
			className={style.explorer}>
			<EntityObjectsContainer
				onSelectEntityObject={entity => {
					switch (entity.type) {
						case EntityType.FOLDER: {
							globalDispatch(entityActions.updateParentEntity(entity));
							break
						}
						case EntityType.MODEL: {
							globalDispatch(modalActions.updateEditModelSourceIsDisplayed(true));
							break;
						}
						case EntityType.SHADER: {
							break;
						}
						case EntityType.SOUND: {
							break
						}
						case EntityType.SCRIPT: {
							break;
						}
						case EntityType.MUSIC: {
							break;
						}
					}

					if (entity.type !== EntityType.FOLDER) {
						globalDispatch(entityActions.updateSelectedEntity(entity));
					}
				}}/>
		</BlockWrapper>
	);

}

export default EntityExplorer;