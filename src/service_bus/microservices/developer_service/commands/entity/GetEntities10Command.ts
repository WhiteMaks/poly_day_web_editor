import Command from "../../../Command";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {GET_ENTITY} from "../../../consts/Methods";
import {VERSION_10} from "../../../consts/Versions";
import GetEntities10BodyRequest from "../../models/entity/GetEntities10BodyRequest";

class GetEntities10Command extends Command<GetEntities10BodyRequest> {

	public constructor() {
		const body: GetEntities10BodyRequest = {
		};

		super(DEVELOPER_SERVICE, GET_ENTITY, VERSION_10, body);
	}

}

export default GetEntities10Command;