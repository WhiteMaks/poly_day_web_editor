interface CreateShaderProgram10BodyResponse {
	shader_programs: ShaderProgram[];
}

export interface ShaderProgram {
	id: number;
	name: string;
	code: ShaderProgramCode;
	objects: ShaderProgramObject[];
}

export interface ShaderProgramCode {
	id: number;
	vertex_shader: string;
	geometry_shader: string;
	fragment_shader: string;
}

export interface ShaderProgramObject {
	id: number;
	model_entity_id: number;
	name: string;
}

export default CreateShaderProgram10BodyResponse;