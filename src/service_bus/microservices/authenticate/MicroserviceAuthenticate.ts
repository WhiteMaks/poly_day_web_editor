import BaseMicroservice from "../BaseMicroservice";
import MicroserviceGateway from "../gateway/MicroserviceGateway";
import IdentifyUser10Command from "./commands/IdentifyUser10Command";
import Event from "../../Event";
import IdentifyUser10BodyResponse from "./models/IdentifyUser10BodyResponse";
import {IDENTIFY_USER} from "../consts/Methods";

class MicroserviceAuthenticate extends BaseMicroservice {

	public constructor(gateway: MicroserviceGateway) {
		super(gateway);
	}

	public identifyUser10(token: string): void {
		const request = new IdentifyUser10Command();
		request.getBody().token = token;
		this.send(request.makeRequest());
	}

	public processEventIdentifyUser10(callback: (event: Event<IdentifyUser10BodyResponse>) => void): void {
		this.processEvent<IdentifyUser10BodyResponse>(IDENTIFY_USER, callback);
	}
}

export default MicroserviceAuthenticate;