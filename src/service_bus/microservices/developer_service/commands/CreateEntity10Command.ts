import Command from "../../Command";
import {CREATE_ENTITY} from "../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../consts/Microservices";
import {VERSION_10} from "../../consts/Versions";
import CreateEntity10BodyRequest from "../models/CreateEntity10BodyRequest";

class CreateEntity10Command extends Command<CreateEntity10BodyRequest> {

	public constructor() {
		const body: CreateEntity10BodyRequest = {
			name: "",
			parent_entity_id: 0,
			type: ""
		};

		super(DEVELOPER_SERVICE, CREATE_ENTITY, VERSION_10, body);
	}
}

export default CreateEntity10Command;