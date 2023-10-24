import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import plus from "../../../../resources/icons/plus.svg";
import style from "./create_release_button.module.css";
import BaseIconButton from "../../../common/actions/BaseIconButton";

interface CreateReleaseButtonProps {
	onClick: () => void;
}

const CreateReleaseButton: FC<CreateReleaseButtonProps> = (props) => {

	return (
		<BlockWrapper
			className={style.wrapper}>
			<BaseIconButton
				onClick={props.onClick}
				description={"Create release"}
				iconPath={plus}/>
		</BlockWrapper>
	);

}

export default CreateReleaseButton;