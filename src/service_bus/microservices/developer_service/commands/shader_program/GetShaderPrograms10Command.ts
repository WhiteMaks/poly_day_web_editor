import Command from "../../../Command";
import {GET_SHADER_PROGRAMS} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import GetShaderPrograms10BodyRequest from "../../models/shader_program/GetShaderPrograms10BodyRequest";

class GetShaderPrograms10Command extends Command<GetShaderPrograms10BodyRequest> {

	public constructor() {
		const body: GetShaderPrograms10BodyRequest = {
			release_id: 0
		};

		super(DEVELOPER_SERVICE, GET_SHADER_PROGRAMS, VERSION_10, body);
	}
}

export default GetShaderPrograms10Command;