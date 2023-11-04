import {FC, ReactNode} from "react";
import CheckUserResponse from "../../../api/models/CheckUserResponse";
import BlockWrapper from "../../common/wrappers/BlockWrapper";

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

		if (!props.check.authorized) {
			return props.userNotAuthorized;
		}

		return props.userAuthorized;
	}

	return(
		<BlockWrapper>
			{renderBody()}
		</BlockWrapper>
	);

}

export default CheckUserComponent;