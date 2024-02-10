import BaseLayer from "../../libs/game_engine/src/engine/layer/impl/BaseLayer";
import MouseEvent from "#events_system/src/mouse/MouseEvent";
import KeyboardEvent from "#events_system/src/keyboard/KeyboardEvent";
import Time from "#graphics_engine/src/support/Time";
import GraphicsElement from "#graphics_engine/src/graphics/GraphicsElement";
import Vector4 from "#graphics_engine/src/maths/impl/Vector4";
import ElementEvent from "#events_system/src/element/ElementEvent";
import ElementEventType from "#events_system/src/element/ElementEventType";
import GameEngine from "../../libs/game_engine/src/engine/GameEngine";
import Scene from "../../libs/game_engine/src/engine/Scene";
import Entity from "#entity_component_system/src/entity/Entity";
import CameraComponent from "../../libs/game_engine/src/engine/ecs/component/ext/CameraComponent";
import ColorRendererComponent from "../../libs/game_engine/src/engine/ecs/component/ext/ColorRendererComponent";
import CameraControllerScript from "../scripts/CameraControllerScript";
import TypeScriptComponent from "../../libs/game_engine/src/engine/ecs/component/ext/TypeScriptComponent";
import OrthographicCamera from "#graphics_engine/src/camera/ext/OrthographicCamera";
import TransformComponent from "../../libs/game_engine/src/engine/ecs/component/ext/TransformComponent";
import TestScript from "../scripts/TestScript";

class TestLayer extends BaseLayer {
	private readonly graphicsElement: GraphicsElement;
	private readonly color: Vector4;

	private scene!: Scene;

	private squareEntity!: Entity;
	private cameraEntity!: Entity;

	public constructor(graphicsElement: GraphicsElement) {
		super("Test layer");

		this.graphicsElement = graphicsElement;

		this.color = new Vector4(0.0, 0.0, 0.0, 1.0);
	}

	public attach(): void {
		this.scene = new Scene(this.graphicsElement.getWidth(), this.graphicsElement.getHeight());

		this.squareEntity = this.scene.createEntity("Square");
		this.squareEntity.addComponent(ColorRendererComponent);

		const testEntity = this.scene.createEntity("Square2");
		testEntity.addComponent(ColorRendererComponent);
		testEntity.getComponent(TransformComponent).position.setX(2);
		testEntity.addComponent(TypeScriptComponent).bind(TestScript);

		this.cameraEntity = this.scene.createEntity("Camera");
		const cameraComponent = this.cameraEntity.addComponent(CameraComponent);
		cameraComponent.camera = new OrthographicCamera(this.graphicsElement.getWidth(), this.graphicsElement.getHeight());
		cameraComponent.primary = true;
		this.cameraEntity.addComponent(TypeScriptComponent).bind(CameraControllerScript);
	}

	public detach(): void {
	}

	public keyboardInput(event: KeyboardEvent): void {
	}

	public mouseInput(event: MouseEvent): void {
	}

	public elementInput(event: ElementEvent) {
		if (event.getType() === ElementEventType.RESIZE) {
			this.scene.resize(event.getWidth(), event.getHeight());
		}
	}

	public update(time: Time): void {
		this.scene.update(time);
	}

	public render(): void {
		GameEngine.renderer2D.resetStatistics();

		GameEngine.renderer2D.setClearColor(this.color);
		GameEngine.renderer2D.clear();

		this.scene.render();
	}

	public clean(): void {
		this.scene.clean();
		this.squareEntity.clean();
		this.cameraEntity.clean();
	}
}

export default TestLayer;