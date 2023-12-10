import {FC, useState} from "react";
import {useGlobalSelector} from "../../../../state/store";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./actions.module.css";
import IconFolderForHierarchy from "../../../common/icons/IconFolderForHierarchy";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import {
	Entity,
	getOnlyFolders
} from "../../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";
import IconArrow from "./IconArrow";
import FolderObject from "./FolderObject";

interface RootFolderObjectProps {
	onDoubleClick: (folder: Entity | null) => void;
}

const RootFolderObject: FC<RootFolderObjectProps> = (props) => {
	const [isActive, setIsActive] = useState(false);

	const {
		entities
	} = useGlobalSelector(state => state.entityReducer);

	return (
		<BlockWrapper>
			<FlexboxWrapper
				onDoubleClick={() => {
					setIsActive(true);
					props.onDoubleClick(null);
				}}
				className={style.folder_object}>
				<IconArrow
					onClick={() => setIsActive(!isActive)}
					isActive={isActive}/>
				<IconFolderForHierarchy
					className={isActive ? style.folder_object_folder_icon_active : style.folder_object_folder_icon}/>
				<BlockWrapper
					className={style.folder_object_name}>
					Home
				</BlockWrapper>
			</FlexboxWrapper>
			{isActive ?
				getOnlyFolders(entities).map(
					folder =>
						<FolderObject
							onDoubleClick={props.onDoubleClick}
							key={folder.id}
							folder={folder}/>) : null}
		</BlockWrapper>
	);

}

export default RootFolderObject;