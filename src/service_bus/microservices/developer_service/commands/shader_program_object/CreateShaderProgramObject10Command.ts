import Command from "../../../Command";
import {CREATE_SHADER_PROGRAM_OBJECT} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import CreateShaderProgramObject10BodyRequest
	from "../../models/shader_program_object/CreateShaderProgramObject10BodyRequest";

class CreateShaderProgramObject10Command extends Command<CreateShaderProgramObject10BodyRequest> {

	public constructor() {
		const body: CreateShaderProgramObject10BodyRequest = {
			shader_program_id: 0,
			model_entity_id: 0
		};

		super(DEVELOPER_SERVICE, CREATE_SHADER_PROGRAM_OBJECT, VERSION_10, body);
	}
}

export default CreateShaderProgramObject10Command;