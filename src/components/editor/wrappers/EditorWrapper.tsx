import {FC} from "react";
import BlockWrapper from "../../common/wrappers/BlockWrapper";
import ReactComponentProps from "../../common/ReactComponentProps";
import style from "./wrappers.module.css";

const EditorWrapper: FC<ReactComponentProps> = (props) => {
	return (
		<BlockWrapper
			className={style.editor}>
			{props.children}
		</BlockWrapper>
	)
}

export default EditorWrapper;