abstract class Common {
	private static readonly AUTHORIZATION_TOKEN = "authorization_token";

	public static generateHeadersContentTypeJson(): Map<string, string> {
		const headers = new Map<string, string>();
		headers.set("Content-Type", "application/json;charset=UTF-8");
		headers.set("Authorization", this.getBearerToken());
		headers.set("Accept", "application/json");
		return headers;
	}

	public static generateHeadersContentTypeMultipartFormData(): Map<string, string> {
		const headers = new Map<string, string>();
		headers.set("Authorization", this.getBearerToken());
		headers.set("Accept", "application/json");
		return headers;
	}

	public static getBearerToken(): string {
		return "Bearer " + this.getTokenInLocalStorage();
	}

	public static setTokenInLocalStorage(token: string): void {
		this.addNewRecordInLocalStorage(this.AUTHORIZATION_TOKEN, token);
	}

	public static addNewRecordInLocalStorage(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	public static getTokenInLocalStorage(): string {
		return this.getRecordInLocalStorage(this.AUTHORIZATION_TOKEN);
	}

	public static getRecordInLocalStorage(key: string): string {
		let value = localStorage.getItem(key);
		return value == null ? "" : value;
	}

	public static getIdFromUrl(): number {
		const url = window.location.pathname;

		return Number.parseInt(
			url.substring(
				url.lastIndexOf('/') + 1
			)
		);
	}
}

export default Common;