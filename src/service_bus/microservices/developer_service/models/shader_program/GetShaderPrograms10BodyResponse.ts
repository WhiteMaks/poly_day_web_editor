interface CreateShaderProgram10BodyResponse {
	shader_programs: ShaderProgram[];
}

export interface ShaderProgram {
	id: number,
	name: string;
	shader_entity_id: number;
}

export default CreateShaderProgram10BodyResponse;