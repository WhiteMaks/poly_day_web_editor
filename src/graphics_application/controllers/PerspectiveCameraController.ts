import Time from "../../libs/graphics_engine/src/support/Time";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import Key from "../../libs/events_system/src/keyboard/Key";
import BasePerspectiveCameraController
	from "../../libs/graphics_engine/src/camera/controller/BasePerspectiveCameraController";
import Input from "../../libs/events_system/src/inputs/Input";

class PerspectiveCameraController extends BasePerspectiveCameraController<MouseEvent, KeyboardEvent> {
	private readonly cameraTranslationSpeed: number;

	public constructor(width: number, height: number, cameraTranslationSpeed: number, fieldOfView: number, zNear: number, zFar: number) {
		super(width, height, fieldOfView, zNear, zFar);

		this.cameraTranslationSpeed = cameraTranslationSpeed;
	}

	protected updateImpl(time: Time): void {
		const cameraPosition = this.camera.getPosition();
		const currentCameraMoveSpeed = this.cameraTranslationSpeed * time.getDeltaTime();

		if (Input.isKeyboardKeyPressed(Key.A)) {
			cameraPosition.setX(cameraPosition.getX() - currentCameraMoveSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.D)) {
			cameraPosition.setX(cameraPosition.getX() + currentCameraMoveSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.W)) {
			cameraPosition.setZ(cameraPosition.getZ() - currentCameraMoveSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.S)) {
			cameraPosition.setZ(cameraPosition.getZ() + currentCameraMoveSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.LEFT_SHIFT)) {
			cameraPosition.setY(cameraPosition.getY() + currentCameraMoveSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.Z)) {
			cameraPosition.setY(cameraPosition.getY() - currentCameraMoveSpeed);
		}
	}

	public keyboardInput(event: KeyboardEvent): void {
	}

	public mouseInput(event: MouseEvent): void {
	}

}

export default PerspectiveCameraController;