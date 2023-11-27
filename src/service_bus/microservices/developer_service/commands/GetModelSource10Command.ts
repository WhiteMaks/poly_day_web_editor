import Command from "../../Command";
import {GET_MODEL_SOURCE} from "../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../consts/Microservices";
import {VERSION_10} from "../../consts/Versions";
import GetModelSource10BodyRequest from "../models/GetModelSource10BodyRequest";

class GetModelSource10Command extends Command<GetModelSource10BodyRequest> {

	public constructor() {
		const body: GetModelSource10BodyRequest = {
			entity_id: 0,
		};

		super(DEVELOPER_SERVICE, GET_MODEL_SOURCE, VERSION_10, body);
	}
}

export default GetModelSource10Command;