import BaseLayer from "../../libs/graphics_engine/src/layers/impl/BaseLayer";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import IGraphicsContext from "../../libs/graphics_engine/src/renderer/IGraphicsContext";
import testTexture from "../testures/test.png";
import testTexture2 from "../testures/test2.png";
import spriteSheetImg from "../testures/sprite_sheet.png";
import ResourceFactory from "../../libs/graphics_engine/src/factories/ResourceFactory";
import ITexture from "../../libs/graphics_engine/src/resource/ITexture";
import Mouse from "../../libs/events_system/src/mouse/Mouse";
import Keyboard from "../../libs/events_system/src/keyboard/Keyboard";
import Time from "../../libs/graphics_engine/src/support/Time";
import GraphicsElement from "../../libs/graphics_engine/src/graphics/GraphicsElement";
import EditorLogic from "../EditorLogic";
import CameraController from "../../libs/graphics_engine/src/camera/controller/CameraController";
import OrthographicCameraController from "../controllers/OrthographicCameraController";
import Vector4 from "../../libs/graphics_engine/src/maths/impl/Vector4";
import Sprite2D from "../../libs/graphics_engine/src/resource/Sprite2D";
import Vector2 from "../../libs/graphics_engine/src/maths/impl/Vector2";
import RandomWalk2D from "../../libs/graphics_engine/src/maths/algorithm/RandomWalk2D";
import Vector3 from "../../libs/graphics_engine/src/maths/impl/Vector3";

class TestLayer extends BaseLayer<MouseEvent, KeyboardEvent> {
	private readonly cameraController: CameraController<MouseEvent, KeyboardEvent>;
	private readonly context: IGraphicsContext;
	private readonly mouse: Mouse;
	private readonly keyboard: Keyboard;
	private readonly color: Vector4;

	private texture: ITexture | undefined;
	private texture2: ITexture | undefined;

	private spriteSheet: ITexture | undefined;

	private spriteStairs: Sprite2D | undefined;
	private spriteBarrel: Sprite2D | undefined;
	private spriteTree: Sprite2D | undefined;
	private spriteWatter: Sprite2D | undefined;
	private spriteGrass: Sprite2D | undefined;

	private world: boolean[][] | undefined;
	private rotation: number;

	private readonly zoomLevel = 100;
	private readonly mapSize = 200;

	public constructor(graphicsElement: GraphicsElement, mouse: Mouse, keyboard: Keyboard) {
		super("Test layer");

		this.context = graphicsElement.getGraphicsContext();
		this.mouse = mouse;
		this.keyboard = keyboard;
		this.color = new Vector4(0.0, 0.0, 0.0, 1.0);
		this.cameraController = new OrthographicCameraController(graphicsElement, this.mouse, this.keyboard, 0.001, this.zoomLevel);
		// this.cameraController = new PerspectiveCameraController(graphicsElement, this.mouse, this.keyboard, 0.001, 60, 0.01, 1000);

		this.rotation = 0;
	}

	public attach(): void {
		const spriteSheetImage = new Image();
		spriteSheetImage.src = spriteSheetImg;
		this.spriteSheet = ResourceFactory.create2DTexture(this.context, spriteSheetImage, 4);
		this.spriteStairs = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(7, 6), new Vector2(128, 128));
		this.spriteBarrel = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(8, 2), new Vector2(128, 128));
		this.spriteTree = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(2, 1), new Vector2(128, 128), new Vector2(1, 2));
		this.spriteWatter = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(11, 11), new Vector2(128, 128));
		this.spriteGrass = ResourceFactory.createSprite2D(this.spriteSheet, new Vector2(6, 11), new Vector2(128, 128));

		const image = new Image();
		image.src = testTexture;
		this.texture = ResourceFactory.create2DTexture(this.context, image, 3);
		const textSlot = 0;
		this.texture.bind(textSlot);
		const image2 = new Image();
		image2.src = testTexture2;
		this.texture2 = ResourceFactory.create2DTexture(this.context, image2, 4);
		const textSlot2 = 0;
		this.texture2.bind(textSlot2);

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

	public update(time: Time): void {
		this.cameraController.update(time);

		this.rotation += 0.02 * time.getDeltaTime();
	}

	public render(): void {
		EditorLogic.renderer.resetStatistics();

		EditorLogic.renderer.setClearColor(this.color);
		EditorLogic.renderer.clear();

		EditorLogic.renderer.begin(this.cameraController.getCamera());

		for (let row = 0; row < this.world!.length; row++) {
			for (let column = 0; column < this.world![row].length; column++) {
				const offset = this.mapSize / 2;
				EditorLogic.renderer.drawQuadWithSprite(new Vector3(-offset + column, -offset + row, 0), new Vector3(0, 0, 0), new Vector3(1, 1, 1), this.world![row][column] ? this.spriteGrass! : this.spriteWatter!);
			}
		}

		EditorLogic.renderer.end();
	}

	public clean(): void {
		this.texture?.clean();
		this.texture2?.clean();
	}
}

export default TestLayer;