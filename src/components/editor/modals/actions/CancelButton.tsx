import {FC} from "react";
import TextButton from "../../../common/actions/TextButton";

interface CancelButtonProps {
	onClick: () => void;
}

const CancelButton: FC<CancelButtonProps> = (props) => {

	return (
		<TextButton
			onClick={props.onClick}
			name={"Cancel"}/>
	);

}

export default CancelButton;