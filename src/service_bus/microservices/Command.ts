import Message from "../Message";

abstract class Command<BODY> {
	private readonly messageRequest: Message<BODY>;

	protected constructor(microservice: string, method: string, version: string, body: BODY) {
		this.messageRequest = {
			microservice: microservice,
			method: method,
			version: version,
			body: body
		}
	}

	public getBody(): BODY {
		return this.messageRequest.body;
	}

	public makeRequest(): Message<BODY> {
		return this.messageRequest;
	}
}

export default Command;