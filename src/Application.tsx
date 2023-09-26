import React, {FC, useEffect} from "react";
import {useGlobalDispatch, useGlobalSelector} from "./state/store";
import {fetchCheckUser} from "./state/check_user/CheckUserReducer";
import CheckUserComponent from "./components/check_user/CheckUserComponent";
import AuthenticatePage from "./pages/authenticate/AuthenticatePage";
import RootComponent from "./components/root/RootComponent";

const Application: FC = () => {
	const globalDispatch = useGlobalDispatch();
	const {
		check,
		loading
	} = useGlobalSelector(state => state.checkUserReducer);

	useEffect(() => {
		globalDispatch(fetchCheckUser());
	}, [globalDispatch]);


	return(
		<RootComponent>
			<CheckUserComponent
				userNotAuthorized={<AuthenticatePage/>}
				userAuthorized={<div>Authorized</div>}
				loading={loading}
				check={check}/>
		</RootComponent>
	);
}

export default Application;