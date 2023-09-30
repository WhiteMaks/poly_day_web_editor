import {ChangeEvent, FC, useCallback} from "react";
import {useGlobalDispatch, useGlobalSelector} from "../state/store";
import AuthenticateType from "../core/enums/AuthenticateType";
import LoginUserComponent from "../components/login_user/LoginUserComponent";
import AbsoluteCenterWrapper from "../components/wrappers/AbsoluteCenterWrapper";
import {authenticateActions, fetchCreateUser, fetchLoginUser} from "../state/authenticate/AuthenticateReducer";
import {fetchCheckUser} from "../state/check_user/CheckUserReducer";
import RegisterUserComponent from "../components/register_user/RegisterUserComponent";

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
		globalDispatch(
			fetchLoginUser({
				username: username,
				password: password
			})
		).then(() => {
			globalDispatch(fetchCheckUser())
		});
	}

	const onRegister = () => {
		globalDispatch(
			fetchCreateUser({
				username: username,
				password: password
			})
		);
	}

	const goToRegister = () => {
		globalDispatch(authenticateActions.updateType(AuthenticateType.REGISTER));
	}

	const goToLogin = () => {
		globalDispatch(authenticateActions.updateType(AuthenticateType.LOGIN));
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
			return (
				<RegisterUserComponent
					username={username}
					usernameChanged={usernameChanged}
					password={password}
					passwordChanged={passwordChanged}
					onRegister={onRegister}
					goToLogin={goToLogin}/>
			);
		}
	}

	return (
		<AbsoluteCenterWrapper>
			{renderBody()}
		</AbsoluteCenterWrapper>
	);

}

export default AuthenticatePage;