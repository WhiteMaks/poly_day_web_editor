import {FC} from "react";
import {
	ShaderProgramObject
} from "../../../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";
import style from "./actions.module.css";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import iconModelObject from "../../../../resources/icons/model_object.svg";
import BaseIcon from "../../../common/actions/BaseIcon";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";

interface ShaderProgramObjectItemProps {
	object: ShaderProgramObject;
	onContext: (clientX: number, clientY: number, shaderProgramObject: ShaderProgramObject) => void;
}

const ShaderProgramObjectItem: FC<ShaderProgramObjectItemProps> = (props) => {

	return (
		<FlexboxWrapper
			onContextMenu={event => {
				event.preventDefault();

				if (props.onContext) {
					props.onContext(event.clientX, event.clientY, props.object);
				}
			}}
			className={style.hierarchy_item_object}>
			<BaseIcon
				className={style.hierarchy_item_object_icon}
				description={props.object.name}
				iconPath={iconModelObject}/>
			<BlockWrapper
				className={style.hierarchy_item_object_name}>
				{props.object.name}
			</BlockWrapper>
		</FlexboxWrapper>
	);

}

export default ShaderProgramObjectItem;