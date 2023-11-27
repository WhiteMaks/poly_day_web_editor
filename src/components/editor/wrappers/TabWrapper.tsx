import {FC} from "react";
import style from "./wrappers.module.css";
import BlockWrapper from "../../common/wrappers/BlockWrapper";

interface TabWrapperProps {
	onContext?: (clientX: number, clientY: number) => void;
	onClick: () => void;
	isActive: boolean;
	name: string;
}

const TabWrapper: FC<TabWrapperProps> = (props) => {

	return (
		<BlockWrapper
			onContextMenu={event => {
				event.preventDefault();

				if (props.onContext) {
					props.onContext(event.clientX, event.clientY);
				}
			}}
			onClick={props.onClick}
			className={`${style.tab} ${props.isActive ? style.active_tab : style.not_active_tab}`}>
			{props.name}
		</BlockWrapper>
	);

}

export default TabWrapper;