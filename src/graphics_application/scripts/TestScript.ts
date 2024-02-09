import BaseScript from "../../libs/game_engine/src/engine/ecs/script/BaseScript";
import Time from "../../libs/game_engine/src/libs/graphics_engine/src/support/Time";
import ColorRendererComponent from "../../libs/game_engine/src/engine/ecs/component/ext/ColorRendererComponent";

class TestScript extends BaseScript {
	private colorComponent!: ColorRendererComponent;

	public init() {
		this.colorComponent = this.getComponent(ColorRendererComponent);
	}

	public update(time: Time): void {
		this.colorComponent.color.setX(Math.abs(Math.sin(time.getTimestamp() * 0.001)))
	}
}

export default TestScript;