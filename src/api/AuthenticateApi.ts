import UserApi from "./UserApi";

class AuthenticateApi {
	private static authenticateApi: AuthenticateApi | null = null;

	private readonly userApi: UserApi;

	private constructor(baseUrl: string) {
		if (!baseUrl.endsWith("/")) {
			baseUrl = baseUrl.concat("/");
		}

		this.userApi = new UserApi(baseUrl)
	}

	public static getInstance(): AuthenticateApi {
		if (AuthenticateApi.authenticateApi != null) {
			return AuthenticateApi.authenticateApi;
		}

		const baseUrl = process.env.REACT_APP_AUTHENTICATE_HOST;
		AuthenticateApi.authenticateApi = new AuthenticateApi(baseUrl ? baseUrl : "");
		return AuthenticateApi.authenticateApi;
	}

	public getUserApi(): UserApi {
		return this.userApi;
	}
}

export default AuthenticateApi;