import MicroserviceGateway from "./microservices/gateway/MicroserviceGateway";
import MicroserviceAuthenticate from "./microservices/authenticate/MicroserviceAuthenticate";
import MicroserviceDeveloperService from "./microservices/developer_service/MicroserviceDeveloperService";

class BusClient {
	private readonly gateway: MicroserviceGateway;
	private readonly authenticate: MicroserviceAuthenticate;
	private readonly developerService: MicroserviceDeveloperService;

	public constructor(address: string) {
		this.gateway = new MicroserviceGateway(address)
		this.authenticate = new MicroserviceAuthenticate(this.gateway);
		this.developerService = new MicroserviceDeveloperService(this.gateway);
	}

	public onConnected(callback: () => void): void {
		this.gateway.onConnected(callback);
	}

	public onDisconnected(callback: () => void): void {
		this.gateway.onDisconnected(callback);
	}

	public getAuthenticate(): MicroserviceAuthenticate {
		return this.authenticate;
	}

	public getDeveloperService(): MicroserviceDeveloperService {
		return this.developerService;
	}
}

export default BusClient;