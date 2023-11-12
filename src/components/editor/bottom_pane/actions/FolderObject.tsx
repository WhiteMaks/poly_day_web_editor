import {FC, useState} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import {
	Entity,
	getOnlyFolders
} from "../../../../service_bus/microservices/developer_service/models/GetEntities10BodyResponse";
import IconArrowDown from "../../../common/icons/IconArrowDown";
import style from "./actions.module.css";
import IconFolderForHierarchy from "../../../common/icons/IconFolderForHierarchy";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import IconArrowUp from "../../../common/icons/IconArrowUp";

interface FolderObjectProps {
	folder: Entity;
	level: number;
}

const FolderObject: FC<FolderObjectProps> = (props) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<BlockWrapper
			style={{
				marginLeft: props.level > 0 ? 27 : 0
			}}>
			<FlexboxWrapper
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
							level={props.level + 1}
							key={folder.id}
							folder={folder}/>) : null}
		</BlockWrapper>
	);

}

interface IconArrowProps {
	isActive: boolean;
}

const IconArrow: FC<IconArrowProps> = (props) => {

	if (props.isActive) {
		return (
			<IconArrowUp
				className={style.folder_object_arrow_icon}/>
		);
	}

	return (
		<IconArrowDown
			className={style.folder_object_arrow_icon}/>
	);

}

export default FolderObject;