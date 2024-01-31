import BaseOrthographicCameraController
	from "../../libs/graphics_engine/src/camera/controller/BaseOrthographicCameraController";
import Time from "../../libs/graphics_engine/src/support/Time";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import Mouse from "../../libs/events_system/src/mouse/Mouse";
import Keyboard from "../../libs/events_system/src/keyboard/Keyboard";
import Key from "../../libs/events_system/src/keyboard/Key";

class OrthographicCameraController extends BaseOrthographicCameraController<MouseEvent, KeyboardEvent> {
	private readonly mouse: Mouse;
	private readonly keyboard: Keyboard;

	private readonly cameraTranslationSpeed: number;

	public constructor(width: number, height: number, mouse: Mouse, keyboard: Keyboard, cameraTranslationSpeed: number, zoomLevel: number = 1) {
		super(width, height, zoomLevel);

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
			cameraPosition.setY(cameraPosition.getY() + currentCameraMoveSpeed);
		}
		if (this.keyboard.keyIsPressed(Key.S)) {
			cameraPosition.setY(cameraPosition.getY() - currentCameraMoveSpeed);
		}
	}

	public keyboardInput(event: KeyboardEvent): void {
	}

	public mouseInput(event: MouseEvent): void {
	}

}

export default OrthographicCameraController;