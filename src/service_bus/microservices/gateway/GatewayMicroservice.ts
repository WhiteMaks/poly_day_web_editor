import Message from "../../Message";
import Event from "../../Event";

class GatewayMicroservice {
	private readonly webSocket: WebSocket;
	private readonly methods: Map<string, (event: Event<any>) => void>
	private messageBuffer: Message<any>[];
	private connected: boolean;

	public constructor(address: string) {
		this.webSocket = new WebSocket(address);
		this.methods = new Map<string, (event: Event<any>) => void>();
		this.messageBuffer = [];
		this.connected = false;

		this.init();
	}

	public sendMessage<BODY>(message: Message<BODY>) {
		if (!this.connected) {
			this.messageBuffer.push(message);
			return;
		}

		this.webSocket.send(JSON.stringify(message));
	}

	public onConnected(callback: () => void): void {
		this.webSocket.onopen = (event) => {
			this.connected = true;

			for (const message of this.messageBuffer) {
				this.sendMessage(message);
			}

			this.messageBuffer = [];

			callback();
		}
	}

	public onDisconnected(callback: () => void): void {
		this.webSocket.onclose = (event) => {
			this.connected = false;

			callback();
		}
	}

	public processEvent<BODY>(methodName: string, callback: (event: Event<BODY>) => void): void {
		this.methods.set(methodName, callback);
	}

	private init(): void {
		this.webSocket.onmessage = (event) => {
			const baseEvent: Event<any> = JSON.parse(event.data);
			const callback = this.methods.get(baseEvent.method);
			if (callback) {
				callback(baseEvent);
			}
		}
	}
}

export default GatewayMicroservice;