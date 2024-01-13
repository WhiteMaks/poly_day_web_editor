import BaseLayer from "../../libs/graphics_engine/src/layers/impl/BaseLayer";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import IGraphicsContext from "../../libs/graphics_engine/src/renderer/IGraphicsContext";
import BufferLayout from "../../libs/graphics_engine/src/buffer/BufferLayout";
import {NewBufferElement} from "../../libs/graphics_engine/src/buffer/BufferElement";
import ShaderDataType from "../../libs/graphics_engine/src/shader/ShaderDataType";
import BufferFactory from "../../libs/graphics_engine/src/factories/BufferFactory";
import ShaderProgramFactory from "../../libs/graphics_engine/src/factories/ShaderProgramFactory";
import testTexture from "../testures/test.png";
import testTexture2 from "../testures/test2.png";
import ResourceFactory from "../../libs/graphics_engine/src/factories/ResourceFactory";
import IArrayBuffer from "../../libs/graphics_engine/src/buffer/IArrayBuffer";
import IShaderProgram from "../../libs/graphics_engine/src/shader/IShaderProgram";
import ITexture from "../../libs/graphics_engine/src/resource/ITexture";
import Mouse from "../../libs/events_system/src/mouse/Mouse";
import Keyboard from "../../libs/events_system/src/keyboard/Keyboard";
import Time from "../../libs/graphics_engine/src/support/Time";
import Transformation from "../../libs/graphics_engine/src/maths/support/Transformation";
import Vector3 from "../../libs/graphics_engine/src/maths/impl/Vector3";
import GraphicsElement from "../../libs/graphics_engine/src/graphics/GraphicsElement";
import EditorLogic from "../EditorLogic";
import CameraController from "../../libs/graphics_engine/src/camera/controller/CameraController";
import OrthographicCameraController from "../controllers/OrthographicCameraController";
import {textureFragmentShaderCode, textureVertexShaderCode} from "../shaders/TextureShader";

class TestLayer extends BaseLayer<MouseEvent, KeyboardEvent> {
	private readonly cameraController: CameraController<MouseEvent, KeyboardEvent>;
	private readonly context: IGraphicsContext;
	private readonly mouse: Mouse;

	private readonly keyboard: Keyboard;
	private vertexArray: IArrayBuffer | undefined;
	private shaderProgram: IShaderProgram | undefined;
	private texture: ITexture | undefined;
	private texture2: ITexture | undefined;

	public constructor(graphicsElement: GraphicsElement, mouse: Mouse, keyboard: Keyboard) {
		super("Test layer");

		this.context = graphicsElement.getGraphicsContext();
		this.mouse = mouse;
		this.keyboard = keyboard;
		this.cameraController = new OrthographicCameraController(graphicsElement, this.mouse, this.keyboard, 0.001);
		// this.cameraController = new PerspectiveCameraController(graphicsElement, this.mouse, this.keyboard, 0.001, 60, 0.01, 1000);
	}

	public attach(): void {
		const data: number[] = [
			-0.5, -0.5,  0.0,  0.0,
			 0.5, -0.5,  1.0,  0.0,
			 0.5,  0.5,  1.0,  1.0,
			-0.5,  0.5,  0.0,  1.0
		];

		const indexes: number[] = [
			0, 1, 2,
			2, 3, 0
		];

		const bufferLayout: BufferLayout = new BufferLayout([
			NewBufferElement(ShaderDataType.FLOAT_2, "a_Position"),
			NewBufferElement(ShaderDataType.FLOAT_2, "a_TextureCoordinate"),
		]);

		const vertexBuffer = BufferFactory.createFloat32VertexStaticBuffer(this.context, data);
		vertexBuffer.setLayout(bufferLayout);

		const indexBuffer = BufferFactory.createUint16IndexStaticBuffer(this.context, indexes);

		this.vertexArray = BufferFactory.createVertexArrayBuffer(this.context);
		this.vertexArray.addVertexBuffer(vertexBuffer);
		this.vertexArray.setIndexBuffer(indexBuffer);

		this.vertexArray.unbind();
		vertexBuffer.unbind();
		indexBuffer.unbind();

		this.shaderProgram = ShaderProgramFactory.createProgram(this.context, "First shader program", textureVertexShaderCode, textureFragmentShaderCode);
		this.shaderProgram.bind();
		EditorLogic.shaderProgramLibrary.add(this.shaderProgram);

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
		this.shaderProgram.setUniform1i("u_Texture", textSlot);

		this.shaderProgram.unbind();
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
		EditorLogic.renderer.begin(this.cameraController.getCamera());

		this.texture!.bind(0);
		EditorLogic.renderer.drawTriangles(this.shaderProgram!, this.vertexArray!, Transformation.getWorldMatrix(new Vector3(0, 0, -0.5), new Vector3(0, 0, 0), 1, 1, 1));

		this.texture2!.bind(0);
		EditorLogic.renderer.drawTriangles(this.shaderProgram!, this.vertexArray!, Transformation.getWorldMatrix(new Vector3(0, 0, 0), new Vector3(0, 0, 0), 1, 1, 1));

		EditorLogic.renderer.end();
	}

	public update(time: Time): void {
		this.cameraController.update(time);
	}

	public clean(): void {
		this.vertexArray?.clean();
		this.shaderProgram?.clean();
		this.texture?.clean();
		this.texture2?.clean();
	}
}

export default TestLayer;