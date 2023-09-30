import {ChangeEventHandler, FC} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";

interface LoginUserComponentProps {
	username: string
	password: string

	usernameChanged: ChangeEventHandler<HTMLInputElement>
	passwordChanged: ChangeEventHandler<HTMLInputElement>

	onLogin: () => void
	goToRegister: () => void
}

const LoginUserComponent: FC<LoginUserComponentProps> = (props) => {
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
				onClick={() => props.onLogin()}>
				Login
			</button>
			<button
				onClick={() => props.goToRegister()}>
				Register
			</button>
		</BlockWrapper>
	);
}

export default LoginUserComponent;