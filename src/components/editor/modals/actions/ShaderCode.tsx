import {FC, useEffect, useRef, useState} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./action.module.css";
import CodeEditor from "../../../common/actions/CodeEditor";
import ShaderType from "../../../../core/enums/ShaderType";
import {useGlobalSelector} from "../../../../state/store";

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

	

	// useEffect(() => {
	// 	console.log("sss")
	// 	props.setEditor(ace.edit("editor"));
	// }, [props]);

	return (
		<BlockWrapper
			id={"editor"}
			className={style.shader_code}>
				{/*<CodeEditor*/}
				{/*	id={"editor"}*/}
				{/*	value={getValueFromShaderType()}*/}
				{/*	onChange={props.onChange}/>*/}
		</BlockWrapper>
	);

}

export default ShaderCode;