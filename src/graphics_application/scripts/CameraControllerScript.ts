import {GameEngine} from "#game_engine/src/namespace/game_engine";

class CameraControllerScript extends GameEngine.ECS.BaseScript {
	private readonly cameraTranslationSpeed: number = 0.001;
	private readonly cameraZoomSpeed: number = 0.005;

	private camera!: GameEngine.GraphicsEngine.OrthographicCamera;

	public init() {
		this.camera = this.getComponent(GameEngine.ECS.CameraComponent).camera as GameEngine.GraphicsEngine.OrthographicCamera;
	}

	public update(time: GameEngine.Time): void {
		const cameraPosition = this.camera.getPosition();
		const currentCameraMoveSpeed = this.cameraTranslationSpeed * time.getDeltaTimeMs();
		const currentCameraZoomSpeed = this.cameraZoomSpeed * time.getDeltaTimeMs();

		if (GameEngine.EventSystem.Input.isKeyboardKeyPressed(GameEngine.EventSystem.Key.A)) {
			cameraPosition.setX(cameraPosition.getX() - currentCameraMoveSpeed);
		}
		if (GameEngine.EventSystem.Input.isKeyboardKeyPressed(GameEngine.EventSystem.Key.D)) {
			cameraPosition.setX(cameraPosition.getX() + currentCameraMoveSpeed);
		}
		if (GameEngine.EventSystem.Input.isKeyboardKeyPressed(GameEngine.EventSystem.Key.W)) {
			cameraPosition.setY(cameraPosition.getY() + currentCameraMoveSpeed);
		}
		if (GameEngine.EventSystem.Input.isKeyboardKeyPressed(GameEngine.EventSystem.Key.S)) {
			cameraPosition.setY(cameraPosition.getY() - currentCameraMoveSpeed);
		}

		if (GameEngine.EventSystem.Input.isKeyboardKeyPressed(GameEngine.EventSystem.Key.E)) {
			this.camera.setZoomLevel(this.camera.getZoomLevel() + currentCameraZoomSpeed);
		}
		if (GameEngine.EventSystem.Input.isKeyboardKeyPressed(GameEngine.EventSystem.Key.Q)) {
			this.camera.setZoomLevel(this.camera.getZoomLevel() - currentCameraZoomSpeed);
		}
	}
}

export default CameraControllerScript;