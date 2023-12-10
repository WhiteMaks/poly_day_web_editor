import Command from "../../../Command";
import {GET_SHADER_SOURCE} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import GetShaderSource10BodyRequest from "../../models/source/GetShaderSource10BodyRequest";

class GetShaderSource10Command extends Command<GetShaderSource10BodyRequest> {

	public constructor() {
		const body: GetShaderSource10BodyRequest = {
			entity_id: 0,
		};

		super(DEVELOPER_SERVICE, GET_SHADER_SOURCE, VERSION_10, body);
	}
}

export default GetShaderSource10Command;