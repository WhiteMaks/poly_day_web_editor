import RestApi from "../core/RestApi";

abstract class BaseRestApi extends RestApi {
	private readonly AUTHORIZATION_TOKEN = "authorization_token";

	protected readonly baseUrl: string;

	protected constructor(baseUrl: string) {
		super();

		this.baseUrl = baseUrl;
	}

	protected generateHeadersContentTypeJson(): Map<string, string> {
		const headers = new Map<string, string>();
		headers.set("Content-Type", "application/json;charset=UTF-8");
		headers.set("Authorization", this.getBearerToken());
		headers.set("Accept", "application/json");
		return headers;
	}

	protected getBearerToken(): string {
		return this.getTokenInLocalStorage();
	}

	protected getTokenInLocalStorage(): string {
		return this.getRecordInLocalStorage(this.AUTHORIZATION_TOKEN);
	}

	protected getRecordInLocalStorage(key: string): string {
		let value = localStorage.getItem(key);
		return value == null ? "" : value;
	}
}

export default BaseRestApi;