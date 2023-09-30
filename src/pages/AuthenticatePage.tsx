import {ChangeEvent, FC, useCallback} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../state/store";
import AuthenticateType from "../core/enums/AuthenticateType";
import LoginUserComponent from "../components/login_user/LoginUserComponent";
import AbsoluteCenterWrapper from "../components/wrappers/AbsoluteCenterWrapper";
import {authenticateActions} from "../state/authenticate/AuthenticateReducer";

const AuthenticatePage: FC = () => {
	const globalDispatch = useGlobalDispatch();
	const {
		type,
		username,
		password
	} = useGlobalSelector(state => state.authenticateReducer);

	const usernameChanged = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			globalDispatch(authenticateActions.updateUsername(event.target.value));
		},
		[globalDispatch]
	);

	const passwordChanged = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			globalDispatch(authenticateActions.updatePassword(event.target.value));
		},
		[globalDispatch]
	);

	const onLogin = () => {
		console.log(username, password)
	}

	const goToRegister = () => {
		globalDispatch(authenticateActions.updateType(AuthenticateType.REGISTER));
	}

	const renderBody = () => {
		if (type === AuthenticateType.LOGIN) {
			return (
				<LoginUserComponent
					username={username}
					usernameChanged={usernameChanged}
					password={password}
					passwordChanged={passwordChanged}
					onLogin={onLogin}
					goToRegister={goToRegister}/>
			);
		}

		if (type === AuthenticateType.REGISTER) {
			return "register";
		}

		throw Error("not valid authenticate type");
	}

	return (
		<AbsoluteCenterWrapper>
			{renderBody()}
		</AbsoluteCenterWrapper>
	);

}

export default AuthenticatePage;