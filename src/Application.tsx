import React, {FC, useEffect} from "react";
import {useGlobalDispatch, useGlobalSelector} from "./state/store";
import {fetchCheckUser} from "./state/check_user/CheckUserReducer";
import CheckUserComponent from "./components/check_user/CheckUserComponent";
import AuthenticatePage from "./pages/AuthenticatePage";
import FixedFullScreenWrapper from "./components/wrappers/FixedFullScreenWrapper";

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
		<FixedFullScreenWrapper>
			<CheckUserComponent
				userNotAuthorized={<AuthenticatePage/>}
				userAuthorized={<div>Authorized</div>}
				loading={loading}
				check={check}/>
		</FixedFullScreenWrapper>
	);
}

export default Application;