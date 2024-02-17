import {GameEngine} from "#game_engine/src/namespace/game_engine";

class DebugLayer extends GameEngine.Layer.BaseLayer {
	private readonly context: GameEngine.GraphicsEngine.IGraphicsContext;

	private mouseEventsIsPrinted: boolean;
	private keyboardEventsIsPrinted: boolean;
	private timeIsPrinted: boolean;
	private fpsIsPrinted: boolean;
	private rendererStatisticsIsPrinted: boolean;

	public constructor(graphicsElement: GameEngine.GraphicsEngine.GraphicsElement) {
		super("Debug layer");

		this.context = graphicsElement.getGraphicsContext();

		this.mouseEventsIsPrinted = false;
		this.keyboardEventsIsPrinted = false;
		this.timeIsPrinted = false;
		this.fpsIsPrinted = false;
		this.rendererStatisticsIsPrinted = false;
	}

	public attach(): void {
		this.context.printDebugInfo();
	}

	public detach(): void {

	}

	public update(time: GameEngine.Time): void {
		if (this.timeIsPrinted) {
			console.log(time);
		}

		if (this.fpsIsPrinted) {
			console.log(Math.round(1000 / time.getDeltaTimeMs()));
		}
	}

	public keyboardInput(event: GameEngine.EventSystem.KeyboardEvent): void {
		if (this.keyboardEventsIsPrinted) {
			console.log(event);
		}
	}

	public mouseInput(event: GameEngine.EventSystem.MouseEvent): void {
		if (this.mouseEventsIsPrinted) {
			console.log(event);
		}
	}

	public elementInput(event: GameEngine.EventSystem.ElementEvent): void {
	}

	public render(): void {
		if (this.rendererStatisticsIsPrinted) {
			console.log(GameEngine.Engine.renderer2D.getStatics());
		}
	}

	public clean(): void {
	}

	public setMouseEventsIsPrinted(isPrinted: boolean): void {
		this.mouseEventsIsPrinted = isPrinted;
	}

	public setKeyboardEventsIsPrinted(isPrinted: boolean): void {
		this.keyboardEventsIsPrinted = isPrinted;
	}

	public setTimeIsPrinted(isPrinted: boolean): void {
		this.timeIsPrinted = isPrinted;
	}

	public setFpsIsPrinted(isPrinted: boolean): void {
		this.fpsIsPrinted = isPrinted;
	}

	public setRendererStatisticsIsPrinted(isPrinted: boolean): void {
		this.rendererStatisticsIsPrinted = isPrinted;
	}

}

export default DebugLayer;