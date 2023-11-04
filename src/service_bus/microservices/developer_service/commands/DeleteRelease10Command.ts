import Command from "../../Command";
import {DELETE_RELEASE} from "../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../consts/Microservices";
import {VERSION_10} from "../../consts/Versions";
import DeleteRelease10BodyRequest from "../models/DeleteRelease10BodyRequest";

class DeleteRelease10Command extends Command<DeleteRelease10BodyRequest> {

	public constructor() {
		const body: DeleteRelease10BodyRequest = {
			id: 0
		};

		super(DEVELOPER_SERVICE, DELETE_RELEASE, VERSION_10, body);
	}
}

export default DeleteRelease10Command;