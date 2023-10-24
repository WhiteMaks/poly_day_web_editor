import React, {FC} from "react";
import style from "./modal.module.css";
import BlockWrapper from "../../wrappers/BlockWrapper";
import FlexboxWrapper from "../../wrappers/FlexboxWrapper";

interface ActionsContainerProps {
	actions: React.ReactNode[];
}

const ActionsContainer: FC<ActionsContainerProps> = (props) => {

	return (
		<FlexboxWrapper
			className={style.actions}>
			{props.actions.map((action, index) =>
				<BlockWrapper
					key={index}
					className={style.action}>
					{action}
				</BlockWrapper>)}
		</FlexboxWrapper>
	);

}

export default ActionsContainer;