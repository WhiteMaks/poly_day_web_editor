import BaseLayer from "../../libs/game_engine/src/engine/layer/impl/BaseLayer";
import MouseEvent from "#events_system/src/mouse/MouseEvent";
import KeyboardEvent from "#events_system/src/keyboard/KeyboardEvent";
import IGraphicsContext from "#graphics_engine/src/renderer/IGraphicsContext";
import Time from "#graphics_engine/src/support/Time";
import GraphicsElement from "#graphics_engine/src/graphics/GraphicsElement";
import ElementEvent from "#events_system/src/element/ElementEvent";
import GameEngine from "../../libs/game_engine/src/engine/GameEngine";

class DebugLayer extends BaseLayer {
	private readonly context: IGraphicsContext;

	private mouseEventsIsPrinted: boolean;
	private keyboardEventsIsPrinted: boolean;
	private timeIsPrinted: boolean;
	private fpsIsPrinted: boolean;
	private rendererStatisticsIsPrinted: boolean;

	public constructor(graphicsElement: GraphicsElement) {
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

	public update(time: Time): void {
		if (this.timeIsPrinted) {
			console.log(time);
		}

		if (this.fpsIsPrinted) {
			console.log(Math.round(1000 / time.getDeltaTime()));
		}
	}

	public keyboardInput(event: KeyboardEvent): void {
		if (this.keyboardEventsIsPrinted) {
			console.log(event);
		}
	}

	public mouseInput(event: MouseEvent): void {
		if (this.mouseEventsIsPrinted) {
			console.log(event);
		}
	}

	public elementInput(event: ElementEvent): void {
	}

	public render(): void {
		if (this.rendererStatisticsIsPrinted) {
			console.log(GameEngine.renderer2D.getStatics());
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