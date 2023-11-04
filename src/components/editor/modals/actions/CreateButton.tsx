import {FC} from "react";
import TextButton from "../../../common/actions/TextButton";

interface CreateButtonProps {
	onClick: () => void;
}

const CreateButton: FC<CreateButtonProps> = (props) => {

	return (
		<TextButton
			onClick={props.onClick}
			name={"Create"}/>
	);

}

export default CreateButton;