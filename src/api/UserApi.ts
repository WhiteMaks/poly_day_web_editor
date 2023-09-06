import CreateUserResponse from "./models/CreateUserResponse";
import CheckUserResponse from "./models/CheckUserResponse";
import BaseRestApi from "./BaseRestApi";

class UserApi extends BaseRestApi {

	public constructor(baseUrl: string) {
		super(baseUrl.concat("user/"));
	}

	public async create(username: string, password: string): Promise<CreateUserResponse> {
		const requestBody = {
			username: username,
			password: password
		}

		return super.responseToJson(
			await this.sendRequestPostJson(
				this.baseUrl.concat("create"),
				requestBody
			)
		);
	}

	public async check(): Promise<CheckUserResponse> {
		return this.responseToJson(
			await this.sendRequestGet(
				this.baseUrl.concat("check"),
				this.generateHeadersContentTypeJson()
			)
		);
	}
}

export default UserApi;