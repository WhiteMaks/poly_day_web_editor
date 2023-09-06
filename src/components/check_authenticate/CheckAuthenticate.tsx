import {FC, ReactNode, useEffect} from "react";
import styles from "./check_authenticate.module.css";
import {useGlobalDispatch, useGlobalSelector} from "../../store";
import {fetchCheckUser} from "./state/CheckAuthenticateReducer";

interface CheckAuthenticateProps {
	renderIfAuthorized: ReactNode;
	renderIfNotAuthorized: ReactNode;
}

const CheckAuthenticate: FC<CheckAuthenticateProps> = (props) => {
	const globalDispatch = useGlobalDispatch()
	const {
		check,
		loading
	} = useGlobalSelector(state => state.checkAuthenticateReducer)

	useEffect(() => {
		globalDispatch(fetchCheckUser());
	}, [globalDispatch]);

	const renderBody = () => {
		if (loading) {
			return "loading";
		}

		if (check.authorized) {
			return props.renderIfAuthorized;
		}

		return props.renderIfNotAuthorized;
	}

	return(
		<div className={styles.background}>
			{renderBody()}
		</div>
	);

}

export default CheckAuthenticate;