import BaseMicroservice from "../BaseMicroservice";
import MicroserviceGateway from "../gateway/MicroserviceGateway";
import CreateRelease10Command from "./commands/release/CreateRelease10Command";
import Event from "../../Event";
import {
	CREATE_ENTITY,
	CREATE_RELEASE, CREATE_SHADER_PROGRAM,
	DELETE_ENTITY,
	DELETE_RELEASE, DELETE_SHADER_PROGRAM,
	GET_ENTITY,
	GET_MODEL_SOURCE,
	GET_RELEASES, GET_SHADER_PROGRAMS,
	GET_SHADER_SOURCE,
	SAVE_MODEL_SOURCE,
	SAVE_SHADER_SOURCE
} from "../consts/Methods";
import CreateRelease10BodyResponse from "./models/release/CreateRelease10BodyResponse";
import GetReleases10Command from "./commands/release/GetReleases10Command";
import GetReleases10BodyResponse from "./models/release/GetReleases10BodyResponse";
import DeleteRelease10Command from "./commands/release/DeleteRelease10Command";
import DeleteRelease10BodyResponse from "./models/release/DeleteRelease10BodyResponse";
import CreateEntity10Command from "./commands/entity/CreateEntity10Command";
import CreateEntity10BodyResponse from "./models/entity/CreateEntity10BodyResponse";
import GetEntities10Command from "./commands/entity/GetEntities10Command";
import GetEntities10BodyResponse from "./models/entity/GetEntities10BodyResponse";
import EntityType from "../consts/EntityType";
import DeleteEntity10Command from "./commands/entity/DeleteEntity10Command";
import DeleteEntity10BodyResponse from "./models/entity/DeleteEntity10BodyResponse";
import SaveModelSource10Command from "./commands/source/SaveModelSource10Command";
import SaveModelSource10BodyResponse from "./models/source/SaveModelSource10BodyResponse";
import GetModelSource10Command from "./commands/source/GetModelSource10Command";
import GetModelSource10BodyResponse from "./models/source/GetModelSource10BodyResponse";
import SaveShaderSource10Command from "./commands/source/SaveShaderSource10Command";
import SaveShaderSource10BodyResponse from "./models/source/SaveShaderSource10BodyResponse";
import GetShaderSource10Command from "./commands/source/GetShaderSource10Command";
import GetShaderSource10BodyResponse from "./models/source/GetShaderSource10BodyResponse";
import CreateShaderProgram10Command from "./commands/shader_program/CreateShaderProgram10Command";
import CreateShaderProgram10BodyResponse from "./models/shader_program/CreateShaderProgram10BodyResponse";
import GetShaderPrograms10Command from "./commands/shader_program/GetShaderPrograms10Command";
import GetShaderPrograms10BodyResponse from "./models/shader_program/GetShaderPrograms10BodyResponse";
import DeleteShaderProgram10Command from "./commands/shader_program/DeleteShaderProgram10Command";
import DeleteShaderProgram10BodyResponse from "./models/shader_program/DeleteShaderProgram10BodyResponse";

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

	public getEntities10(): void {
		const request = new GetEntities10Command();
		this.send(request.makeRequest());
	}

	public processEventGetEntities10(callback: (event: Event<GetEntities10BodyResponse>) => void): void {
		this.processEvent<GetEntities10BodyResponse>(GET_ENTITY, callback);
	}

	public createEntity10(name: string, type: EntityType, parentEntityId: number): void {
		const request = new CreateEntity10Command();
		request.getBody().name = name;
		request.getBody().type = type;
		request.getBody().parent_entity_id = parentEntityId;
		this.send(request.makeRequest());
	}

	public processEventCreateEntity10(callback: (event: Event<CreateEntity10BodyResponse>) => void): void {
		this.processEvent<CreateEntity10BodyResponse>(CREATE_ENTITY, callback);
	}

	public deleteEntity10(id: number): void {
		const request = new DeleteEntity10Command();
		request.getBody().id = id;
		this.send(request.makeRequest());
	}

	public processEventDeleteEntity10(callback: (event: Event<DeleteEntity10BodyResponse>) => void): void {
		this.processEvent<DeleteEntity10BodyResponse>(DELETE_ENTITY, callback);
	}

	public saveModelSource10(entityId: number, sourceBase64: string): void {
		const request = new SaveModelSource10Command();
		request.getBody().entity_id = entityId;
		request.getBody().source_base_64 = sourceBase64;
		this.send(request.makeRequest());
	}

	public processEventSaveModelSource10(callback: (event: Event<SaveModelSource10BodyResponse>) => void): void {
		this.processEvent<SaveModelSource10BodyResponse>(SAVE_MODEL_SOURCE, callback);
	}

	public getModelSource10(entityId: number): void {
		const request = new GetModelSource10Command();
		request.getBody().entity_id = entityId;
		this.send(request.makeRequest());
	}

	public processEventGetModelSource10(callback: (event: Event<GetModelSource10BodyResponse>) => void): void {
		this.processEvent<GetModelSource10BodyResponse>(GET_MODEL_SOURCE, callback);
	}

	public saveShaderSource10(entityId: number, vertexShader: string, fragmentShader: string): void {
		const request = new SaveShaderSource10Command();
		request.getBody().entity_id = entityId;
		request.getBody().vertex_shader = vertexShader;
		request.getBody().fragment_shader = fragmentShader;
		this.send(request.makeRequest());
	}

	public processEventSaveShaderSource10(callback: (event: Event<SaveShaderSource10BodyResponse>) => void): void {
		this.processEvent<SaveShaderSource10BodyResponse>(SAVE_SHADER_SOURCE, callback);
	}

	public getShaderSource10(entityId: number): void {
		const request = new GetShaderSource10Command();
		request.getBody().entity_id = entityId;
		this.send(request.makeRequest());
	}

	public processEventGetShaderSource10(callback: (event: Event<GetShaderSource10BodyResponse>) => void): void {
		this.processEvent<GetShaderSource10BodyResponse>(GET_SHADER_SOURCE, callback);
	}

	public getShaderPrograms10(releaseId: number): void {
		const request = new GetShaderPrograms10Command();
		request.getBody().release_id = releaseId;
		this.send(request.makeRequest());
	}

	public processEventGetShaderPrograms10(callback: (event: Event<GetShaderPrograms10BodyResponse>) => void): void {
		this.processEvent<GetShaderPrograms10BodyResponse>(GET_SHADER_PROGRAMS, callback);
	}

	public createShaderProgram10(name: string, releaseId: number, shaderEntityId: number): void {
		const request = new CreateShaderProgram10Command();
		request.getBody().name = name;
		request.getBody().release_id = releaseId;
		request.getBody().shader_entity_id = shaderEntityId;
		this.send(request.makeRequest());
	}

	public processEventCreateShaderProgram10(callback: (event: Event<CreateShaderProgram10BodyResponse>) => void): void {
		this.processEvent<CreateShaderProgram10BodyResponse>(CREATE_SHADER_PROGRAM, callback);
	}

	public deleteShaderProgram10(id: number): void {
		const request = new DeleteShaderProgram10Command();
		request.getBody().id = id;
		this.send(request.makeRequest());
	}

	public processEventDeleteShaderProgram10(callback: (event: Event<DeleteShaderProgram10BodyResponse>) => void): void {
		this.processEvent<DeleteShaderProgram10BodyResponse>(DELETE_SHADER_PROGRAM, callback);
	}
}

export default MicroserviceDeveloperService;