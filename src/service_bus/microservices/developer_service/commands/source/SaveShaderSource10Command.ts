import Command from "../../../Command";
import {SAVE_SHADER_SOURCE} from "../../../consts/Methods";
import {DEVELOPER_SERVICE} from "../../../consts/Microservices";
import {VERSION_10} from "../../../consts/Versions";
import SaveShaderSource10BodyRequest from "../../models/source/SaveShaderSource10BodyRequest";

class SaveShaderSource10Command extends Command<SaveShaderSource10BodyRequest> {

	public constructor() {
		const body: SaveShaderSource10BodyRequest = {
			entity_id: 0,
			vertex_shader: "",
			fragment_shader: ""
		};

		super(DEVELOPER_SERVICE, SAVE_SHADER_SOURCE, VERSION_10, body);
	}
}

export default SaveShaderSource10Command;