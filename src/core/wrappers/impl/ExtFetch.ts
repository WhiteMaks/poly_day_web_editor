import RestApi from "../RestApi";

class ExtFetch implements RestApi {

	public sendGet(url: string, headers: Map<string, string>): Promise<Response> {
		return this.sendRequest(url, "GET", headers, undefined);
	}

	public sendPostJson(url: string, body: object, headers: Map<string, string>): Promise<Response> {
		return this.sendRequest(url, "POST", headers, body);
	}

	public sendPostFile(url: string, file: File, headers: Map<string, string>): Promise<Response> {
		const formData = new FormData();
		formData.append("file", file);
		return this.sendRequestFile(url, "POST", headers, formData);
	}

	private sendRequest(url: string, method: string, headers: Map<string, string>, body?: object): Promise<Response> {
		return fetch(
			url,
			{
				method: method,
				headers: this.convertMapToRecord(headers),
				body: body === undefined ? undefined : JSON.stringify(body)
			}
		);
	}

	private sendRequestFile(url: string, method: string, headers: Map<string, string>, body?: FormData): Promise<Response> {
		return fetch(
			url,
			{
				method: method,
				headers: this.convertMapToRecord(headers),
				body: body === undefined ? undefined : body
			}
		);
	}

	public convertMapToRecord(map?: Map<string, string>): Record<string, string> {
		let result: Record<string, string> = {}

		if (map == null) {
			return result;
		}

		for (let [key, value] of map) {
			result[key] = value;
		}

		return result;
	}

}

export default ExtFetch;