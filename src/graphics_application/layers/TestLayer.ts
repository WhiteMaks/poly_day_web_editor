import BaseLayer from "#graphics_engine/src/layers/impl/BaseLayer";
import MouseEvent from "#events_system/src/mouse/MouseEvent";
import KeyboardEvent from "#events_system/src/keyboard/KeyboardEvent";
import IGraphicsContext from "#graphics_engine/src/renderer/IGraphicsContext";
import spriteSheetImg from "../testures/sprite_sheet.png";
import ResourceFactory from "#graphics_engine/src/factories/ResourceFactory";
import ITexture from "#graphics_engine/src/resource/ITexture";
import Time from "#graphics_engine/src/support/Time";
import GraphicsElement from "#graphics_engine/src/graphics/GraphicsElement";
import OrthographicCameraController from "../controllers/OrthographicCameraController";
import Vector4 from "#graphics_engine/src/maths/impl/Vector4";
import Sprite2D from "#graphics_engine/src/resource/Sprite2D";
import Vector2 from "#graphics_engine/src/maths/impl/Vector2";
import RandomWalk2D from "#graphics_engine/src/maths/algorithm/RandomWalk2D";
import Vector3 from "#graphics_engine/src/maths/impl/Vector3";
import ElementEvent from "#events_system/src/element/ElementEvent";
import ElementEventType from "#events_system/src/element/ElementEventType";
import BaseOrthographicCameraController
	from "#graphics_engine/src/camera/controller/BaseOrthographicCameraController";
import GameEngine from "../../libs/game_engine/src/engine/GameEngine";

class TestLayer extends BaseLayer<MouseEvent, KeyboardEvent, ElementEvent> {
	private readonly cameraController: BaseOrthographicCameraController<MouseEvent, KeyboardEvent>;
	private readonly context: IGraphicsContext;
	private readonly color: Vector4;

	private spriteSheet: ITexture | undefined;

	private spriteStairs: Sprite2D | undefined;
	private spriteBarrel: Sprite2D | undefined;
	private spriteTree: Sprite2D | undefined;
	private spriteWatter: Sprite2D | undefined;
	private spriteGrass: Sprite2D | undefined;

	private world: boolean[][] | undefined;

	private mapSize;

	public constructor(graphicsElement: GraphicsElement) {
		super("Test layer");

		this.context = graphicsElement.getGraphicsContext();
		this.color = new Vector4(0.0, 0.0, 0.0, 1.0);
		this.cameraController = new OrthographicCameraController(graphicsElement.getWidth(), graphicsElement.getHeight(), 0.001, 0.005);
		this.mapSize = this.cameraController.getCamera().getZoomLevel() * 2;
	}

	public attach(): void {
		const spriteSheetImage = new Image();
		spriteSheetImage.src = spriteSheetImg;

		const textureSize = new Vector2(128, 128);
		this.spriteSheet = ResourceFactory.create2DTexture(this.context, spriteSheetImage, 4);
		this.spriteStairs = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(7, 6), textureSize);
		this.spriteBarrel = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(8, 2), textureSize);
		this.spriteTree = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(2, 1), textureSize, new Vector2(1, 2));
		this.spriteWatter = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(11, 11), textureSize);
		this.spriteGrass = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(6, 11), textureSize);

		this.world = new RandomWalk2D(this.mapSize, this.mapSize).generate(1000);
	}

	public detach(): void {
	}

	public keyboardInput(event: KeyboardEvent): void {
		this.cameraController.keyboardInput(event);
	}

	public mouseInput(event: MouseEvent): void {
		this.cameraController.mouseInput(event);
	}

	public elementInput(event: ElementEvent) {
		if (event.getType() === ElementEventType.RESIZE) {
			this.cameraController.resize(event.getWidth(), event.getHeight());
		}
	}

	public update(time: Time): void {
		this.cameraController.update(time);

		const newMapSize = Math.round(this.cameraController.getCamera().getZoomLevel() * 2);

		if (this.mapSize !== newMapSize) {
			this.mapSize = newMapSize;
			this.world = new RandomWalk2D(this.mapSize, this.mapSize).generate(1000);
		}
	}

	public render(): void {
		GameEngine.renderer2D.resetStatistics();

		GameEngine.renderer2D.setClearColor(this.color);
		GameEngine.renderer2D.clear();

		GameEngine.renderer2D.begin(this.cameraController.getCamera());

		for (let row = 0; row < this.world!.length; row++) {
			for (let column = 0; column < this.world![row].length; column++) {
				const offset = this.mapSize / 2;
				GameEngine.renderer2D.drawQuadWithSprite(new Vector3(-offset + column + 0.5, -offset + row + 0.5, 0), new Vector3(0, 0, 0), new Vector3(1, 1, 1), this.world![row][column] ? this.spriteGrass! : this.spriteWatter!);
			}
		}

		GameEngine.renderer2D.end();
	}

	public clean(): void {
		this.spriteSheet?.clean();
	}
}

export default TestLayer;