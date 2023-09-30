import CreateUserResponse from "./models/CreateUserResponse";
import CheckUserResponse from "./models/CheckUserResponse";
import Common from "../core/Common";
import RestApi from "../core/RestApi";
import LoginUserResponse from "./models/LoginUserResponse";

class UserApi extends RestApi {
	private readonly baseUrl: string

	public constructor(baseUrl: string) {
		super();
		this.baseUrl = baseUrl.concat("user/");
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

	public async login(username: string, password: string): Promise<LoginUserResponse> {
		const requestBody = {
			username: username,
			password: password
		}

		return super.responseToJson(
			await this.sendRequestPostJson(
				this.baseUrl.concat("login"),
				requestBody
			)
		);
	}

	public async check(): Promise<CheckUserResponse> {
		return this.responseToJson(
			await this.sendRequestGet(
				this.baseUrl.concat("check"),
				Common.generateHeadersContentTypeJson()
			)
		);
	}
}

export default UserApi;