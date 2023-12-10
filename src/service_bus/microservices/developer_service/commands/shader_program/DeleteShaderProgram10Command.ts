import Command from "../../../Command";
import {DELETE_SHADER_PROGRAM} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import DeleteShaderProgram10BodyRequest from "../../models/shader_program/DeleteShaderProgram10BodyRequest";

class DeleteShaderProgram10Command extends Command<DeleteShaderProgram10BodyRequest> {

	public constructor() {
		const body: DeleteShaderProgram10BodyRequest = {
			id: 0
		};

		super(DEVELOPER_SERVICE, DELETE_SHADER_PROGRAM, VERSION_10, body);
	}
}

export default DeleteShaderProgram10Command;