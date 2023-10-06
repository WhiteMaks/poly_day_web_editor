interface Message<BODY> {
	microservice: string,
	method: string,
	version: string,
	body: BODY
}

export default Message;