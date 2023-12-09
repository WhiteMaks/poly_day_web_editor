import {FC} from "react";
import {
	ShaderProgram
} from "../../../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";
import HierarchyChild from "./HierarchyChild";

interface ShaderProgramItemProps {
	shaderProgram: ShaderProgram
}

const ShaderProgramItem: FC<ShaderProgramItemProps> = (props) => {

	return (
		<HierarchyChild
			name={props.shaderProgram.name}/>
	);

}

export default ShaderProgramItem;