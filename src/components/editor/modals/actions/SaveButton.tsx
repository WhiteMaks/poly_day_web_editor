import {FC} from "react";
import TextButton from "../../../common/actions/TextButton";

interface SaveButtonProps {
	onClick: () => void;
}

const SaveButton: FC<SaveButtonProps> = (props) => {

	return (
		<TextButton
			onClick={props.onClick}
			name={"Save"}/>
	);

}

export default SaveButton;