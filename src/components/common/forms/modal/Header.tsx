import React, {FC} from "react";
import style from "./modal.module.css";
import Title from "./Title";
import CloseButton from "./CloseButton";
import FlexboxWrapper from "../../wrappers/FlexboxWrapper";

interface HeaderProps {
	title: string;
	onClose: () => void;
}

const Header: FC<HeaderProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.header}>
			<Title
				value={props.title}/>
			<CloseButton
				onClick={props.onClose}/>
		</FlexboxWrapper>
	);

}

export default Header;