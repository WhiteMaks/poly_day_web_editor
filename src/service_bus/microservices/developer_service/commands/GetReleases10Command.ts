import Command from "../../Command";
import GetReleases10BodyRequest from "../models/GetReleases10BodyRequest";
import {DEVELOPER_SERVICE} from "../../consts/Microservices";
import {GET_RELEASES} from "../../consts/Methods";
import {VERSION_10} from "../../consts/Versions";

class GetReleases10Command extends Command<GetReleases10BodyRequest> {

	public constructor() {
		const body: GetReleases10BodyRequest = {
		};

		super(DEVELOPER_SERVICE, GET_RELEASES, VERSION_10, body);
	}

}

export default GetReleases10Command;