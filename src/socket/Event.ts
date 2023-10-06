interface Event<BODY> {
	microservice: string,
	method: string,
	version: string,
	status: number,
	body: BODY
}
export default Event;