import {FC, useState} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {
	Entity,
	getOnlyFolders
} from "../../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import style from "./actions.module.css";
import IconFolderForHierarchy from "../../../common/icons/IconFolderForHierarchy";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import IconArrow from "./IconArrow";

interface FolderObjectProps {
	folder: Entity;
	onDoubleClick: (folder: Entity) => void;
}

const FolderObject: FC<FolderObjectProps> = (props) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<BlockWrapper
			className={style.folder_object_wrapper}>
			<FlexboxWrapper
				onDoubleClick={() => {
					setIsActive(true);
					props.onDoubleClick(props.folder)
				}}
				onClick={() => setIsActive(!isActive)}
				className={style.folder_object}>
				<IconArrow
					isActive={isActive}/>
				<IconFolderForHierarchy
					className={isActive ? style.folder_object_folder_icon_active : style.folder_object_folder_icon}/>
				<BlockWrapper
					className={style.folder_object_name}>
					{props.folder.name}
				</BlockWrapper>
			</FlexboxWrapper>
			{isActive ?
				getOnlyFolders(props.folder.entities).map(
					folder =>
						<FolderObject
							onDoubleClick={props.onDoubleClick}
							key={folder.id}
							folder={folder}/>) : null}
		</BlockWrapper>
	);

}

export default FolderObject;