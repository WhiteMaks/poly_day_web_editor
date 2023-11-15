import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./folder_objects_container.module.css";
import RootFolderObject from "../actions/RootFolderObject";
import {useGlobalDispatch} from "../../../../state/store";
import {entityActions} from "../../../../state/develop/entity/EntityReducer";

const FolderObjectsContainer: FC = () => {
	const globalDispatch = useGlobalDispatch();

	return (
		<BlockWrapper
			className={style.wrapper}>
			<RootFolderObject
				onDoubleClick={folder => globalDispatch(entityActions.updateParentEntity(folder))}/>
		</BlockWrapper>
	);

}

export default FolderObjectsContainer;