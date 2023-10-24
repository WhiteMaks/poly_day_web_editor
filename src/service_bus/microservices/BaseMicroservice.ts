import MicroserviceGateway from "./gateway/MicroserviceGateway";
import Message from "../Message";
import Event from "../Event";

abstract class BaseMicroservice {
	private readonly gateway: MicroserviceGateway;

	protected constructor(gateway: MicroserviceGateway) {
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