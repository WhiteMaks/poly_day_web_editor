import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./folder_objects_container.module.css";
import {useGlobalSelector} from "../../../../state/store";
import {getOnlyFolders} from "../../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import FolderObject from "../actions/FolderObject";

const FolderObjectsContainer: FC = () => {
	const {
		entities
	} = useGlobalSelector(state => state.entityReducer);

	return (
		<BlockWrapper
			className={style.wrapper}>
			{getOnlyFolders(entities).map(
				folder =>
					<FolderObject
						level={0}
						key={folder.id}
						folder={folder}/>
			)}
		</BlockWrapper>
	);

}

export default FolderObjectsContainer;