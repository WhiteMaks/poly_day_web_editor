import {GameEngine} from "#game_engine/src/namespace/game_engine";

class Editor extends GameEngine.Engine {

	public constructor(parentElement: HTMLElement) {
		super(parentElement);
	}

}

export default Editor;