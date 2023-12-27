import Common from "../support/Common";
import RestApi from "./wrappers/RestApi";
import ExtFetch from "./wrappers/impl/ExtFetch";

abstract class BaseRestApi {
	private readonly api: RestApi;

	protected constructor() {
		this.api = new ExtFetch();
	}

	protected sendRequestGet(url: string, headers?: Map<string, string>): Promise<Response> {
		return this.api.sendGet(url, headers === undefined ? Common.generateHeadersContentTypeJson() : headers);
	}

	protected sendRequestPostJson(url: string, body: object, headers?: Map<string, string>): Promise<Response> {
		return this.api.sendPostJson(url, body, headers === undefined ? Common.generateHeadersContentTypeJson() : headers);
	}

	protected sendRequestPostFile(url: string, file: File, headers?: Map<string, string>): Promise<Response> {
		return this.api.sendPostFile(url, file, headers === undefined ? Common.generateHeadersContentTypeMultipartFormData() : headers);
	}

	protected responseToJson(response: Response): Promise<any> {
		return response.json();
	}
}


export default BaseRestApi;