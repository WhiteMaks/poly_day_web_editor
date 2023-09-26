import {FC, ReactNode} from "react";
import CheckUserResponse from "../../api/models/CheckUserResponse";

interface CheckAuthenticateComponentProps {
	userAuthorized: ReactNode;
	userNotAuthorized: ReactNode;

	loading: boolean;
	check: CheckUserResponse;
}

const CheckUserComponent: FC<CheckAuthenticateComponentProps> = (props) => {
	const renderBody = () => {
		if (props.loading) {
			return "loading";
		}

		if (props.check.authorized) {
			return props.userAuthorized;
		}

		return props.userNotAuthorized;
	}

	return(
		<div>
			{renderBody()}
		</div>
	);

}

export default CheckUserComponent;