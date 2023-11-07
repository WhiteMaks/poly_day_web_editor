import BaseMicroservice from "../BaseMicroservice";
import MicroserviceGateway from "../gateway/MicroserviceGateway";
import CreateRelease10Command from "./commands/CreateRelease10Command";
import Event from "../../Event";
import {CREATE_ENTITY, CREATE_RELEASE, DELETE_RELEASE, GET_RELEASES} from "../consts/Methods";
import CreateRelease10BodyResponse from "./models/CreateRelease10BodyResponse";
import GetReleases10Command from "./commands/GetReleases10Command";
import GetReleases10BodyResponse from "./models/GetReleases10BodyResponse";
import DeleteRelease10Command from "./commands/DeleteRelease10Command";
import DeleteRelease10BodyResponse from "./models/DeleteRelease10BodyResponse";
import CreateEntity10Command from "./commands/CreateEntity10Command";
import CreateEntity10BodyResponse from "./models/CreateEntity10BodyResponse";

class MicroserviceDeveloperService extends BaseMicroservice {

	public constructor(gateway: MicroserviceGateway) {
		super(gateway);
	}

	public getReleases10(): void {
		const request = new GetReleases10Command();
		this.send(request.makeRequest());
	}

	public processEventGetReleases10(callback: (event: Event<GetReleases10BodyResponse>) => void): void {
		this.processEvent<GetReleases10BodyResponse>(GET_RELEASES, callback);
	}

	public createRelease10(name: string): void {
		const request = new CreateRelease10Command();
		request.getBody().name = name;
		this.send(request.makeRequest());
	}

	public processEventCreateRelease10(callback: (event: Event<CreateRelease10BodyResponse>) => void): void {
		this.processEvent<CreateRelease10BodyResponse>(CREATE_RELEASE, callback);
	}

	public deleteRelease10(id: number): void {
		const request = new DeleteRelease10Command();
		request.getBody().id = id;
		this.send(request.makeRequest());
	}

	public processEventDeleteRelease10(callback: (event: Event<DeleteRelease10BodyResponse>) => void): void {
		this.processEvent<DeleteRelease10BodyResponse>(DELETE_RELEASE, callback);
	}

	public createEntity10(name: string, type: string, parentEntityId: number): void {
		const request = new CreateEntity10Command();
		request.getBody().name = name;
		request.getBody().type = type;
		request.getBody().parent_entity_id = parentEntityId;
		this.send(request.makeRequest());
	}

	public processEventCreateEntity10(callback: (event: Event<CreateEntity10BodyResponse>) => void): void {
		this.processEvent<CreateEntity10BodyResponse>(CREATE_ENTITY, callback);
	}
}

export default MicroserviceDeveloperService;