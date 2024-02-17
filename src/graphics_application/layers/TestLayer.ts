import CameraControllerScript from "../scripts/CameraControllerScript";
import TestScript from "../scripts/TestScript";
import {GameEngine} from "#game_engine/src/namespace/game_engine";

class TestLayer extends GameEngine.Layer.BaseLayer {
	private readonly graphicsElement: GameEngine.GraphicsEngine.GraphicsElement;
	private readonly color: GameEngine.GraphicsEngine.Vector4;

	private scene!: GameEngine.Scene;

	private squareEntity!: GameEngine.ECS.Entity;
	private cameraEntity!: GameEngine.ECS.Entity;

	public constructor(graphicsElement: GameEngine.GraphicsEngine.GraphicsElement) {
		super("Test layer");

		this.graphicsElement = graphicsElement;

		this.color = new GameEngine.GraphicsEngine.Vector4(0.0, 0.0, 0.0, 1.0);
	}

	public attach(): void {
		this.scene = new GameEngine.Scene(this.graphicsElement.getWidth(), this.graphicsElement.getHeight());

		this.squareEntity = this.scene.createEntity("Square");
		this.squareEntity.addComponent(GameEngine.ECS.ColorRendererComponent);

		const testEntity = this.scene.createEntity("Square2");
		testEntity.addComponent(GameEngine.ECS.ColorRendererComponent);
		testEntity.getComponent(GameEngine.ECS.TransformComponent).position.setX(2);
		testEntity.addComponent(GameEngine.ECS.TypeScriptComponent).bind(TestScript);

		this.cameraEntity = this.scene.createEntity("Camera");
		const cameraComponent = this.cameraEntity.addComponent(GameEngine.ECS.CameraComponent);
		cameraComponent.camera = new GameEngine.GraphicsEngine.OrthographicCamera(this.graphicsElement.getWidth(), this.graphicsElement.getHeight());
		cameraComponent.primary = true;
		this.cameraEntity.addComponent(GameEngine.ECS.TypeScriptComponent).bind(CameraControllerScript);
	}

	public detach(): void {
	}

	public keyboardInput(event: GameEngine.EventSystem.KeyboardEvent): void {
	}

	public mouseInput(event: GameEngine.EventSystem.MouseEvent): void {
	}

	public elementInput(event: GameEngine.EventSystem.ElementEvent) {
		if (event.getType() === GameEngine.EventSystem.ElementEventType.RESIZE) {
			this.scene.resize(event.getWidth(), event.getHeight());
		}
	}

	public update(time: GameEngine.Time): void {
		this.scene.update(time);
	}

	public render(): void {
		GameEngine.Engine.renderer2D.resetStatistics();

		GameEngine.Engine.renderer2D.setClearColor(this.color);
		GameEngine.Engine.renderer2D.clear();

		this.scene.render();
	}

	public clean(): void {
		this.scene.clean();
		this.squareEntity.clean();
		this.cameraEntity.clean();
	}
}

export default TestLayer;