import Command from "../../../Command";
import {DELETE_SHADER_PROGRAM_OBJECT} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import DeleteShaderProgramObject10BodyRequest
	from "../../models/shader_program_object/DeleteShaderProgramObject10BodyRequest";

class DeleteShaderProgramObject10Command extends Command<DeleteShaderProgramObject10BodyRequest> {

	public constructor() {
		const body: DeleteShaderProgramObject10BodyRequest = {
			id: 0
		};

		super(DEVELOPER_SERVICE, DELETE_SHADER_PROGRAM_OBJECT, VERSION_10, body);
	}
}

export default DeleteShaderProgramObject10Command;