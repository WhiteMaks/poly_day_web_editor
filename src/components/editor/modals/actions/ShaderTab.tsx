import {FC} from "react";
import TabWrapper from "../../wrappers/TabWrapper";
import ShaderType from "../../../../core/enums/ShaderType";

interface ShaderTabProps {
	shader: ShaderType;
	onSelect: (shader: ShaderType) => void;
	isActive: boolean;
}

const ShaderTab: FC<ShaderTabProps> = (props) => {

	return (
		<TabWrapper
			onClick={() => props.onSelect(props.shader)}
			isActive={props.isActive}
			name={props.shader.toString()}/>
	);

}

export default ShaderTab;