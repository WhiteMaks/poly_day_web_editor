import {FC} from "react";
import style from "./authenticate.module.css";
import {useGlobalDispatch, useGlobalSelector} from "../../state/store";
import AuthenticateType from "../../core/enums/AuthenticateType";

const AuthenticatePage: FC = () => {
	const globalDispatch = useGlobalDispatch();
	const {
		type
	} = useGlobalSelector(state => state.authenticateReducer);

	const renderBody = () => {
		if (type === AuthenticateType.LOGIN) {
			return "login";
		}

		if (type === AuthenticateType.REGISTER) {
			return "register";
		}

		return null;
	}

	return (
		<div className={style.wrapper}>
			{renderBody()}
		</div>
	);

}

export default AuthenticatePage;