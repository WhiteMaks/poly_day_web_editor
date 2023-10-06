import {FC} from "react";
import BlockWrapper from "../../wrappers/BlockWrapper";
import IconButton from "../../common/actions/IconButton";
import plus from "../../../resources/icons/plus.svg";
import style from "./create_release_button.module.css";

interface CreateReleaseButtonProps {
	onClick: () => void;
}

const CreateReleaseButton: FC<CreateReleaseButtonProps> = (props) => {

	return (
		<BlockWrapper
			className={style.wrapper}>
			<IconButton
				onClick={props.onClick}
				description={"Create release"}
				iconPath={plus}/>
		</BlockWrapper>
	);

}

export default CreateReleaseButton;