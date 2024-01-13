import {FC, useEffect, useRef} from "react";
import BlockWrapper from "../../../../common/wrappers/BlockWrapper";
import style from "./window.module.css";
import EditorLogic from "../../../../../graphics_application/EditorLogic";
import GraphicsApplication from "../../../../../libs/graphics_engine/src/graphics/GraphicsApplication";

const Viewport: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const editor = useRef<GraphicsApplication | null>(null);

	useEffect(() => {
		if (!ref || !ref.current) {
			return;
		}

		editor.current = new GraphicsApplication(ref.current, new EditorLogic());
		editor.current.start();
	}, [ref]);

	useEffect(() => () => {
		editor.current?.stop();
	}, [editor]);

	return (
		<BlockWrapper
			innerRef={ref}
			className={style.viewport}>
		</BlockWrapper>
	);

}

export default Viewport;