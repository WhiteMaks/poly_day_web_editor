import Command from "../../Command";
import IdentifyUser10BodyRequest from "../models/IdentifyUser10BodyRequest";
import {IDENTIFY_USER} from "../../consts/Methods";
import {AUTHENTICATE} from "../../consts/Microservices";
import {VERSION_10} from "../../consts/Versions";

class IdentifyUser10Command extends Command<IdentifyUser10BodyRequest> {

	public constructor() {
		const body: IdentifyUser10BodyRequest = {
			token: ""
		};

		super(AUTHENTICATE, IDENTIFY_USER, VERSION_10, body);
	}
}

export default IdentifyUser10Command;