import BaseResponse from "./BaseResponse";

interface LoginUserResponse extends BaseResponse {
	token: string
}

export default LoginUserResponse;