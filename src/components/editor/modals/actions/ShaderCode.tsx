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
	value: string
}

const ShaderCode: FC<ShaderCodeProps> = (props) => {

	return (
		<AceEditor
			mode="glsl"
			theme="vibrant_ink"
			value={props.value}
			onChange={props.onChange}
			name={style.shader_code_editor}
			fontSize={16}
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