import {FC} from "react";
import {
	ShaderProgramObject
} from "../../../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";
import style from "./actions.module.css";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import iconShaderProgram from "../../../../resources/icons/gpu.svg";
import BaseIcon from "../../../common/actions/BaseIcon";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";

interface ShaderProgramObjectItemProps {
	object: ShaderProgramObject;
}

const ShaderProgramObjectItem: FC<ShaderProgramObjectItemProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.hierarchy_item_object}>
			<BaseIcon
				className={style.hierarchy_item_object_icon}
				description={props.object.name}
				iconPath={iconShaderProgram}/>
			<BlockWrapper
				className={style.hierarchy_item_object_name}>
				{props.object.name}
			</BlockWrapper>
		</FlexboxWrapper>
	);

}

export default ShaderProgramObjectItem;