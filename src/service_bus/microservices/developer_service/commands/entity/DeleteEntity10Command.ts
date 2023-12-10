import Command from "../../../Command";
import {DELETE_ENTITY} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import DeleteEntity10BodyRequest from "../../models/entity/DeleteEntity10BodyRequest";

class DeleteEntity10Command extends Command<DeleteEntity10BodyRequest> {

	public constructor() {
		const body: DeleteEntity10BodyRequest = {
			id: 0
		};

		super(DEVELOPER_SERVICE, DELETE_ENTITY, VERSION_10, body);
	}
}

export default DeleteEntity10Command;