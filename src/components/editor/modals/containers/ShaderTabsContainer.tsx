import {FC} from "react";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";
import style from "./containers.module.css";
import ShaderType from "../../../../core/enums/ShaderType";
import ShaderTab from "../actions/ShaderTab";

interface ShaderTabsContainerProps {
	shaders: ShaderType[]
	selectedShader: ShaderType;
	onSelectShaderTab: (shader: ShaderType) => void;
}

const ShaderTabsContainer: FC<ShaderTabsContainerProps> = (props) => {
	return (
		<FlexboxWrapper
			className={style.shader_tabs}>
			{props.shaders.map((shader, index) =>
				<ShaderTab
					key={index}
					shader={shader}
					onSelect={props.onSelectShaderTab}
					isActive={props.selectedShader === shader}/>)}
		</FlexboxWrapper>
	);

}

export default ShaderTabsContainer;