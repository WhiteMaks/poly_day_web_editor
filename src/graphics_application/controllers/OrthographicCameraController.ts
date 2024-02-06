import BaseOrthographicCameraController
	from "#graphics_engine/src/camera/controller/BaseOrthographicCameraController";
import Time from "#graphics_engine/src/support/Time";
import MouseEvent from "#events_system/src/mouse/MouseEvent";
import KeyboardEvent from "#events_system/src/keyboard/KeyboardEvent";
import Key from "#events_system/src/keyboard/Key";
import Input from "#events_system/src/inputs/Input";

class OrthographicCameraController extends BaseOrthographicCameraController<MouseEvent, KeyboardEvent> {
	private readonly cameraTranslationSpeed: number;
	private readonly cameraZoomSpeed: number;

	public constructor(width: number, height: number, cameraTranslationSpeed: number, cameraZoomSpeed: number, zoomLevel: number = 1) {
		super(width, height, zoomLevel);

		this.cameraTranslationSpeed = cameraTranslationSpeed;
		this.cameraZoomSpeed = cameraZoomSpeed;
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
			cameraPosition.setY(cameraPosition.getY() + currentCameraMoveSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.S)) {
			cameraPosition.setY(cameraPosition.getY() - currentCameraMoveSpeed);
		}

		const camera = this.getCamera();
		const currentCameraZoomSpeed = this.cameraZoomSpeed * time.getDeltaTime();
		if (Input.isKeyboardKeyPressed(Key.E)) {
			camera.setZoomLevel(camera.getZoomLevel() + currentCameraZoomSpeed);
			this.resize(this.width, this.height);
		}
		if (Input.isKeyboardKeyPressed(Key.Q)) {
			camera.setZoomLevel(camera.getZoomLevel() - currentCameraZoomSpeed);
			this.resize(this.width, this.height);
		}
	}

	public keyboardInput(event: KeyboardEvent): void {
	}

	public mouseInput(event: MouseEvent): void {
	}

}

export default OrthographicCameraController;