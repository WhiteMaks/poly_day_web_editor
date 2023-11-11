import {FC} from "react";
import style from "./bottom_pane.module.css";
import EntityObjectsContainer from "./containers/EntityObjectsContainer";
import {entityActions} from "../../../state/develop/entity/EntityReducer";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import {useGlobalDispatch} from "../../../state/store";

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
				onSelectEntityObject={entity => globalDispatch(entityActions.updateParentEntity(entity))}/>
		</BlockWrapper>
	);

}

export default EntityExplorer;