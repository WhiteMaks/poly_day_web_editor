import BaseLayer from "../../libs/graphics_engine/src/layers/impl/BaseLayer";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import IGraphicsContext from "../../libs/graphics_engine/src/renderer/IGraphicsContext";
import testTexture from "../testures/test.png";
import testTexture2 from "../testures/test2.png";
import ResourceFactory from "../../libs/graphics_engine/src/factories/ResourceFactory";
import ITexture from "../../libs/graphics_engine/src/resource/ITexture";
import Mouse from "../../libs/events_system/src/mouse/Mouse";
import Keyboard from "../../libs/events_system/src/keyboard/Keyboard";
import Time from "../../libs/graphics_engine/src/support/Time";
import Vector3 from "../../libs/graphics_engine/src/maths/impl/Vector3";
import GraphicsElement from "../../libs/graphics_engine/src/graphics/GraphicsElement";
import EditorLogic from "../EditorLogic";
import CameraController from "../../libs/graphics_engine/src/camera/controller/CameraController";
import OrthographicCameraController from "../controllers/OrthographicCameraController";
import Vector4 from "../../libs/graphics_engine/src/maths/impl/Vector4";

class TestLayer extends BaseLayer<MouseEvent, KeyboardEvent> {
	private readonly cameraController: CameraController<MouseEvent, KeyboardEvent>;
	private readonly context: IGraphicsContext;
	private readonly mouse: Mouse;
	private readonly keyboard: Keyboard;
	private readonly color: Vector4;

	private texture: ITexture | undefined;
	private texture2: ITexture | undefined;

	private rotation: number;

	private readonly zoomLevel = 41;

	public constructor(graphicsElement: GraphicsElement, mouse: Mouse, keyboard: Keyboard) {
		super("Test layer");

		this.context = graphicsElement.getGraphicsContext();
		this.mouse = mouse;
		this.keyboard = keyboard;
		this.color = new Vector4(1.0, 0.0, 1.0, 1.0);
		this.cameraController = new OrthographicCameraController(graphicsElement, this.mouse, this.keyboard, 0.001, this.zoomLevel);
		// this.cameraController = new PerspectiveCameraController(graphicsElement, this.mouse, this.keyboard, 0.001, 60, 0.01, 1000);

		this.rotation = 0;
	}

	public attach(): void {
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
	}

	public detach(): void {
	}

	public keyboardInput(event: KeyboardEvent): void {
		this.cameraController.keyboardInput(event);
	}

	public mouseInput(event: MouseEvent): void {
		this.cameraController.mouseInput(event);
	}

	public render(): void {
		EditorLogic.renderer.resetStatistics();

		EditorLogic.renderer.begin(this.cameraController.getCamera());

		for (let x = -this.zoomLevel + 1; x <= this.zoomLevel - 1; x += 0.5) {
			for (let y = -this.zoomLevel + 1; y <= this.zoomLevel - 1; y += 0.5) {
				EditorLogic.renderer.drawTrianglesWithColor(new Vector3(x, y, -0.8), new Vector3(0, 0, 0), new Vector3(0.45, 0.45, 1), new Vector4((x + 5) / 10, (y + 5) / 10 , 1.0, 0.5));
			}
		}

		// EditorLogic.renderer.drawTrianglesWithColor(new Vector3(0, 0, -0.5), new Vector3(0, 0, 0), new Vector3(1, 1, 1), new Vector4(1, 0, 1, 1));
		EditorLogic.renderer.drawTrianglesWithTexture(new Vector3(0, 0, -0.5), new Vector3(0, 0, this.rotation), new Vector3(1, 1, 1), this.texture!);
		EditorLogic.renderer.drawTrianglesWithTexture(new Vector3(0, 0, 0), new Vector3(0, 0, -this.rotation), new Vector3(1, 1, 1), this.texture2!);
		// EditorLogic.renderer.drawTrianglesWithColor(new Vector3(-0.5, 0, 0), new Vector3(0, 0, 0), new Vector3(1, 1, 1), new Vector4(1, 1, 0, 1));

		EditorLogic.renderer.end();
	}

	public update(time: Time): void {
		this.cameraController.update(time);
		this.color.setX(Math.abs(Math.cos(time.getTimestamp() * time.getDeltaTime() * 0.0002)));

		this.rotation += 0.02 * time.getDeltaTime();
	}

	public clean(): void {
		this.texture?.clean();
		this.texture2?.clean();
	}
}

export default TestLayer;