import GatewayMicroservice from "./gateway/GatewayMicroservice";
import Message from "../Message";
import Event from "../Event";

abstract class BaseMicroservice {
	private readonly gateway: GatewayMicroservice;

	protected constructor(gateway: GatewayMicroservice) {
		this.gateway = gateway;
	}

	protected send<BODY>(request: Message<BODY>): void {
		this.gateway.sendMessage(request);
	}

	protected processEvent<BODY>(methodName: string, callback: (event: Event<BODY>) => void): void {
		this.gateway.processEvent<BODY>(methodName, callback);
	}
}

export default BaseMicroservice;