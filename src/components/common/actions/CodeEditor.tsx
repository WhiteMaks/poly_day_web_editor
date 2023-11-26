import {FC, useEffect} from "react";

interface CodeEditorProps {
	id: string;
	value: string;
	onChange: (value: string) => void;
}

// let editor: AceAjax.Editor | null = null;

const CodeEditor: FC<CodeEditorProps> = (props) => {

	useEffect(() => {
		// editor = ace.edit(props.id);
		// editor.setTheme("ace/theme/vibrant_ink");
		// editor.getSession().setMode("ace/mode/glsl");
		// editor.setOptions({
		// 	enableBasicAutocompletion: true,
		// 	enableLiveAutocompletion: true,
		// 	enableSnippets: true,
		// 	autoScrollEditorIntoView: true,
		// 	copyWithEmptySelection: true,
		// });
		//
		// editor.getSession().on("change", () => {
		// 	props.onChange(editor!.getValue());
		// 	console.log("sss")
		// });
	});


	useEffect(() => {
		console.log("value = " + props.value)
		// editor?.setValue(props.value);
	}, [props.value]);



	return null;

}

export default CodeEditor;