import Command from "../../../Command";
import {SAVE_MODEL_SOURCE} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import SaveModelSource10BodyRequest from "../../models/source/SaveModelSource10BodyRequest";

class SaveModelSource10Command extends Command<SaveModelSource10BodyRequest> {

	public constructor() {
		const body: SaveModelSource10BodyRequest = {
			entity_id: 0,
			source_base_64: ""
		};

		super(DEVELOPER_SERVICE, SAVE_MODEL_SOURCE, VERSION_10, body);
	}
}

export default SaveModelSource10Command;