import GatewayMicroservice from "./microservices/gateway/GatewayMicroservice";
import AuthenticateMicroservice from "./microservices/authenticate/AuthenticateMicroservice";

class BusClient {
	private readonly gateway: GatewayMicroservice;
	private readonly authenticate: AuthenticateMicroservice;

	public constructor(address: string) {
		this.gateway = new GatewayMicroservice(address)
		this.authenticate = new AuthenticateMicroservice(this.gateway);
	}

	public onConnected(callback: () => void): void {
		this.gateway.onConnected(callback);
	}

	public onDisconnected(callback: () => void): void {
		this.gateway.onDisconnected(callback);
	}

	public getAuthenticate(): AuthenticateMicroservice {
		return this.authenticate;
	}
}

export default BusClient;