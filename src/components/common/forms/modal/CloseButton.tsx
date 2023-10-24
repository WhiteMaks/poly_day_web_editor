import React, {FC} from "react";
import IconButton from "../../actions/IconButton";
import closeImg from "../../../../resources/icons/close.svg";

interface CloseButtonProps {
	onClick: () => void;
}

const CloseButton: FC<CloseButtonProps> = (props) => {

	return (
		<IconButton
			onClick={props.onClick}
			description={"Close"}
			iconPath={closeImg}/>
	);

}

export default CloseButton;