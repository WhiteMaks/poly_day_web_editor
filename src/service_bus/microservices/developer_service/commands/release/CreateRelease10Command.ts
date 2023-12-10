import Command from "../../../Command";
import CreateRelease10BodyRequest from "../../models/release/CreateRelease10BodyRequest";
import {CREATE_RELEASE} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";

class CreateRelease10Command extends Command<CreateRelease10BodyRequest> {

	public constructor() {
		const body: CreateRelease10BodyRequest = {
			name: ""
		};

		super(DEVELOPER_SERVICE, CREATE_RELEASE, VERSION_10, body);
	}
}

export default CreateRelease10Command;