import BaseResponse from "./BaseResponse";

interface CheckUserResponse extends BaseResponse {
	authorized: boolean
}

export default CheckUserResponse;