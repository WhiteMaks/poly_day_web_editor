import {FC, useEffect, useRef} from "react";
import BlockWrapper from "../../../../common/wrappers/BlockWrapper";
import style from "./window.module.css";
import Editor from "../../../../../graphics_application/Editor";
import DebugLayer from "../../../../../graphics_application/layers/DebugLayer";
import TestLayer from "../../../../../graphics_application/layers/TestLayer";
import {GameEngine} from "#game_engine/src/namespace/game_engine";

const Viewport: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const editor = useRef<GameEngine.GraphicsEngine.GraphicsApplication | null>(null);

	useEffect(() => {
		if (!ref || !ref.current) {
			return;
		}

		const editorApp = new Editor(ref.current!);
		const graphicsElement = editorApp.getGraphicsElement();

		const debugLayer = new DebugLayer(graphicsElement);
		// debugLayer.setFpsIsPrinted(true);
		// debugLayer.setTimeIsPrinted(true);
		// debugLayer.setKeyboardEventsIsPrinted(true);
		// debugLayer.setMouseEventsIsPrinted(true);
		// debugLayer.setRendererStatisticsIsPrinted(true);
		editorApp.pushOverlayLayer(debugLayer);

		const testLayer = new TestLayer(graphicsElement);
		editorApp.pushLayer(testLayer);

		editorApp.init2DRenderer();
		editorApp.start();

		editor.current = editorApp;
	}, [ref]);

	useEffect(() => () => {
		if (editor.current) {
			editor.current.stop();
		}
	}, [editor]);

	return (
		<BlockWrapper
			innerRef={ref}
			className={style.viewport}>
		</BlockWrapper>
	);

}

export default Viewport;