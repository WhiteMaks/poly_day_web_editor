import {FC} from "react";
import {
	ShaderProgram
} from "../../../../service_bus/microservices/developer_service/models/shader_program/GetShaderPrograms10BodyResponse";
import HierarchyChild from "./HierarchyChild";
import iconShaderProgram from "../../../../resources/icons/gpu.svg";

interface ShaderProgramItemProps {
	shaderProgram: ShaderProgram
	onContext: (clientX: number, clientY: number, shaderProgram: ShaderProgram) => void;
}

const ShaderProgramItem: FC<ShaderProgramItemProps> = (props) => {

	return (
		<HierarchyChild
			onContext={(clientX, clientY) => props.onContext(clientX, clientY, props.shaderProgram)}
			icon={iconShaderProgram}
			name={props.shaderProgram.name}/>
	);

}

export default ShaderProgramItem;