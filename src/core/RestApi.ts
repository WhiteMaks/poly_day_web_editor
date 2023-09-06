import Common from "./Common";
import RequestApi from "./wrappers/RequestApi";
import ExtFetch from "./wrappers/impl/ExtFetch";

abstract class RestApi {
	private readonly api: RequestApi;

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


export default RestApi;