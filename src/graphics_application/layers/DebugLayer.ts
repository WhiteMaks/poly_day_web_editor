import BaseLayer from "../../libs/graphics_engine/src/layers/impl/BaseLayer";
import MouseEvent from "../../libs/events_system/src/mouse/MouseEvent";
import KeyboardEvent from "../../libs/events_system/src/keyboard/KeyboardEvent";
import IGraphicsContext from "../../libs/graphics_engine/src/renderer/IGraphicsContext";
import Time from "../../libs/graphics_engine/src/support/Time";
import GraphicsElement from "../../libs/graphics_engine/src/graphics/GraphicsElement";

class DebugLayer extends BaseLayer<MouseEvent, KeyboardEvent> {
	private readonly context: IGraphicsContext;

	private mouseEventsIsPrinted: boolean;
	private keyboardEventsIsPrinted: boolean;
	private timeIsPrinted: boolean;
	private fpsIsPrinted: boolean;

	public constructor(graphicsElement: GraphicsElement) {
		super("Debug layer");

		this.context = graphicsElement.getGraphicsContext();

		this.mouseEventsIsPrinted = false;
		this.keyboardEventsIsPrinted = false;
		this.timeIsPrinted = false;
		this.fpsIsPrinted = false;
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

	public render(): void {
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

}

export default DebugLayer;