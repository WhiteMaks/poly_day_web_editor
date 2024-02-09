import BaseScript from "../../libs/game_engine/src/engine/ecs/script/BaseScript";
import Time from "../../libs/game_engine/src/libs/graphics_engine/src/support/Time";
import CameraComponent from "../../libs/game_engine/src/engine/ecs/component/ext/CameraComponent";
import Input from "../../libs/game_engine/src/libs/events_system/src/inputs/Input";
import Key from "../../libs/game_engine/src/libs/events_system/src/keyboard/Key";
import OrthographicCamera from "../../libs/game_engine/src/libs/graphics_engine/src/camera/ext/OrthographicCamera";

class CameraControllerScript extends BaseScript {
	private readonly cameraTranslationSpeed: number = 0.001;
	private readonly cameraZoomSpeed: number = 0.005;

	private camera: OrthographicCamera | undefined;

	public init() {
		this.camera = this.getComponent(CameraComponent).camera as OrthographicCamera;
	}

	public update(time: Time): void {
		const cameraPosition = this.camera!.getPosition();
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

		const currentCameraZoomSpeed = this.cameraZoomSpeed * time.getDeltaTime();
		if (Input.isKeyboardKeyPressed(Key.E)) {
			this.camera!.setZoomLevel(this.camera!.getZoomLevel() + currentCameraZoomSpeed);
		}
		if (Input.isKeyboardKeyPressed(Key.Q)) {
			this.camera!.setZoomLevel(this.camera!.getZoomLevel() - currentCameraZoomSpeed);
		}
	}
}

export default CameraControllerScript;