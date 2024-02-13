import {GameEngine} from "#game_engine/src/namespace/game_engine";

class TestScript extends GameEngine.ECS.BaseScript {
	private colorComponent!: GameEngine.ECS.ColorRendererComponent;

	public init() {
		this.colorComponent = this.getComponent(GameEngine.ECS.ColorRendererComponent);
	}

	public update(time: GameEngine.GraphicsEngine.Time): void {
		this.colorComponent.color.setX(Math.abs(Math.sin(time.getTimestamp() * 0.001)));
		this.colorComponent.color.setY(Math.abs(Math.cos(time.getTimestamp() * 0.001)));
	}
}

export default TestScript;