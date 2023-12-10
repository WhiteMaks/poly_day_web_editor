import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import {Entity} from "../../../../service_bus/microservices/developer_service/models/entity/GetEntities10BodyResponse";
import style from "./actions.module.css";
import IconFolderForExplorer from "../../../common/icons/IconFolderForExplorer";
import EntityType from "../../../../service_bus/microservices/consts/EntityType";
import {useGlobalSelector} from "../../../../state/store";
import IconModel from "../../../common/icons/IconModel";
import IconShader from "../../../common/icons/IconShader";
import IconScript from "../../../common/icons/IconScript";
import IconSound from "../../../common/icons/IconSound";
import IconMusic from "../../../common/icons/IconMusic";

interface EntityObjectProps {
	entity: Entity;
	onSelect: (entity: Entity) => void;
	onContext: (clientX: number, clientY: number, entity: Entity) => void;
}

const EntityObject: FC<EntityObjectProps> = (props) => {
	const {
		parentEntity
	} = useGlobalSelector(state => state.entityReducer);

	const renderIcon = () => {
		const className = props.entity.id === parentEntity?.id ? `${style.entity_object_icon} ${style.entity_object_icon_active}` : style.entity_object_icon;

		switch (props.entity.type) {
			case EntityType.FOLDER: {
				return (
					<IconFolderForExplorer
						className={className}/>
				);
			}
			case EntityType.MODEL: {
				return (
					<IconModel
						className={className}/>
				);
			}
			case EntityType.SHADER: {
				return (
					<IconShader
						className={className}/>
				);
			}
			case EntityType.SCRIPT: {
				return (
					<IconScript
						className={className}/>
				);
			}
			case EntityType.SOUND: {
				return (
					<IconSound
						className={className}/>
				);
			}
			case EntityType.MUSIC: {
				return (
					<IconMusic
						className={className}/>
				);
			}
		}
	}

	return (
		<BlockWrapper
			draggable={true}
			onDragStart={event => event.dataTransfer.setData("json", JSON.stringify(props.entity))}
			onContextMenu={event => {
				event.preventDefault();

				props.onContext(event.clientX, event.clientY, props.entity);
			}}
			onDoubleClick={() => props.onSelect(props.entity)}
			className={style.entity_object}>
			{renderIcon()}
			<BlockWrapper
				className={props.entity.id === parentEntity?.id ? `${style.entity_object_name} ${style.entity_object_name_active}` : style.entity_object_name}>
				{props.entity.name}
			</BlockWrapper>
		</BlockWrapper>
	);
}

export default EntityObject;