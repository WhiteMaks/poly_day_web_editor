import Command from "../../../Command";
import {CREATE_SHADER_PROGRAM} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import CreateShaderProgram10BodyRequest from "../../models/shader_program/CreateShaderProgram10BodyRequest";

class CreateShaderProgram10Command extends Command<CreateShaderProgram10BodyRequest> {

	public constructor() {
		const body: CreateShaderProgram10BodyRequest = {
			name: "",
			release_id: 0,
			shader_entity_id: 0
		};

		super(DEVELOPER_SERVICE, CREATE_SHADER_PROGRAM, VERSION_10, body);
	}
}

export default CreateShaderProgram10Command;