import {ChangeEventHandler, FC} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";

interface LoginUserComponentProps {
	username: string
	password: string

	usernameChanged: ChangeEventHandler<HTMLInputElement>
	passwordChanged: ChangeEventHandler<HTMLInputElement>

	onRegister: () => void
	goToLogin: () => void
}

const RegisterUserComponent: FC<LoginUserComponentProps> = (props) => {
	return (
		<BlockWrapper>
			<input
				value={props.username}
				onChange={props.usernameChanged}/>
			<input
				type={"password"}
				value={props.password}
				onChange={props.passwordChanged}/>
			<button
				onClick={() => props.onRegister()}>
				Register
			</button>
			<button
				onClick={() => props.goToLogin()}>
				Login
			</button>
		</BlockWrapper>
	);
}

export default RegisterUserComponent;