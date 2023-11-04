import React, {FC, useEffect} from "react";
import {useGlobalDispatch, useGlobalSelector} from "./state/store";
import {fetchCheckUser} from "./state/check_user/CheckUserReducer";
import CheckUserComponent from "./components/authenticate/check_user/CheckUserComponent";
import AuthenticatePage from "./pages/AuthenticatePage";
import FixedFullScreenWrapper from "./components/common/wrappers/FixedFullScreenWrapper";
import EditorPage from "./pages/EditorPage";
import style from "./application.module.css";

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
		<FixedFullScreenWrapper
			className={style.wrapper}>
			<CheckUserComponent
				userNotAuthorized={<AuthenticatePage/>}
				userAuthorized={<EditorPage/>}
				loading={loading}
				check={check}/>
		</FixedFullScreenWrapper>
	);
}

export default Application;