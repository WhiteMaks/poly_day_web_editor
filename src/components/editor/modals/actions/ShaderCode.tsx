import {FC} from "react";
import style from "./action.module.css";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-glsl";
import "ace-builds/src-noconflict/snippets/glsl";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

interface ShaderCodeProps {
	onChange: (value: string) => void;
	vertexShader: string,
	geometryShader: string,
	fragmentShader: string,
}

const ShaderCode: FC<ShaderCodeProps> = (props) => {
	// const {
	// 	selectedShaderType
	// } = useGlobalSelector(state => state.sourceReducer);

	return (
		<AceEditor
			// className={style.shader_code}
			mode="glsl"
			theme="vibrant_ink"
			onChange={value => console.log(value)}
			name={style.shader_code_editor}
			// editorProps={{ $blockScrolling: true }}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
				autoScrollEditorIntoView: true,
				copyWithEmptySelection: true,
			}}
		/>
	);

}

export default ShaderCode;