import Time from "../../libs/graphics_engine/src/support/Time";
import GraphicsElement from "../../libs/graphics_engine/src/graphics/GraphicsElement";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import Mouse from "../../libs/events_system/src/mouse/Mouse";
import Keyboard from "../../libs/events_system/src/keyboard/Keyboard";
import Key from "../../libs/events_system/src/keyboard/Key";
import BasePerspectiveCameraController
	from "../../libs/graphics_engine/src/camera/controller/BasePerspectiveCameraController";

class PerspectiveCameraController extends BasePerspectiveCameraController<MouseEvent, KeyboardEvent> {
	private readonly mouse: Mouse;
	private readonly keyboard: Keyboard;

	private readonly cameraTranslationSpeed: number;

	public constructor(width: number, height: number, mouse: Mouse, keyboard: Keyboard, cameraTranslationSpeed: number, fieldOfView: number, zNear: number, zFar: number) {
		super(width, height, fieldOfView, zNear, zFar);

		this.mouse = mouse;
		this.keyboard = keyboard;
		this.cameraTranslationSpeed = cameraTranslationSpeed;
	}

	protected updateImpl(time: Time): void {
		const cameraPosition = this.camera.getPosition();
		const currentCameraMoveSpeed = this.cameraTranslationSpeed * time.getDeltaTime();

		if (this.keyboard.keyIsPressed(Key.A)) {
			cameraPosition.setX(cameraPosition.getX() - currentCameraMoveSpeed);
		}
		if (this.keyboard.keyIsPressed(Key.D)) {
			cameraPosition.setX(cameraPosition.getX() + currentCameraMoveSpeed);
		}
		if (this.keyboard.keyIsPressed(Key.W)) {
			cameraPosition.setZ(cameraPosition.getZ() - currentCameraMoveSpeed);
		}
		if (this.keyboard.keyIsPressed(Key.S)) {
			cameraPosition.setZ(cameraPosition.getZ() + currentCameraMoveSpeed);
		}
		if (this.keyboard.keyIsPressed(Key.LEFT_SHIFT)) {
			cameraPosition.setY(cameraPosition.getY() + currentCameraMoveSpeed);
		}
		if (this.keyboard.keyIsPressed(Key.Z)) {
			cameraPosition.setY(cameraPosition.getY() - currentCameraMoveSpeed);
		}
	}

	public keyboardInput(event: KeyboardEvent): void {
	}

	public mouseInput(event: MouseEvent): void {
	}

}

export default PerspectiveCameraController;