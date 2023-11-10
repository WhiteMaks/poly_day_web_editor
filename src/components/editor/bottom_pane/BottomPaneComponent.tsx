import {FC} from "react";
import style from "./bottom_pane.module.css";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import EntityObjectsContainer from "./containers/EntityObjectsContainer";
import {useGlobalDispatch} from "../../../state/store";
import {entityActions} from "../../../state/develop/entity/EntityReducer";

const BottomPaneComponent: FC = () => {
	const globalDispatch = useGlobalDispatch();

	return (
		<BlockWrapper
			onContextMenu={event => {
				event.preventDefault();

				const className = (event.target as Element).className.toString();

				if (className.startsWith("bottom") || className.startsWith("wrapper")) {

				}
			}}
			className={style.wrapper}>
			<EntityObjectsContainer
				onSelectEntityObject={entity => globalDispatch(entityActions.updateParentEntity(entity))}/>
		</BlockWrapper>
	);

}

export default BottomPaneComponent;