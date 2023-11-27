import React, {FC} from "react";
import BlockWrapper from "../../wrappers/BlockWrapper";
import ReactComponentProps from "../../ReactComponentProps";
import AbsoluteCenterWrapper from "../../wrappers/AbsoluteCenterWrapper";
import FadeWrapper from "../../wrappers/FadeWrapper";
import style from "./modal.module.css";
import Header from "./Header";
import Body from "./Body";
import ActionsContainer from "./ActionsContainer";

interface ModalProps extends ReactComponentProps {
	name: string;
	onClose: () => void;
	actions: React.ReactNode[];
	bodyClass?: string;
}

const Modal: FC<ModalProps> = (props) => {

	return (
		<FadeWrapper>
			<AbsoluteCenterWrapper>
				<BlockWrapper
					className={style.wrapper}>
					<Header
						title={props.name}
						onClose={props.onClose}/>
					<Body
						className={props.bodyClass}>
						{props.children}
					</Body>
					<ActionsContainer
						actions={props.actions}/>
				</BlockWrapper>
			</AbsoluteCenterWrapper>
		</FadeWrapper>
	);

}

export default Modal;