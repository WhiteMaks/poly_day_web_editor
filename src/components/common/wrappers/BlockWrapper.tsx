import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";

const BlockWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<div
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			ref={props.innerRef}
			style={props.style}
			onContextMenu={props.onContextMenu}
			onClick={event => {
				switch (event.detail) {
					case 2: {
						if (props.onDoubleClick) {
							props.onDoubleClick();
						}
						break
					}
					case 1: {
						if (props.onClick) {
							props.onClick();
						}
						break
					}
				}
			}}
			className={props.className}>
			{props.children}
		</div>
	);

}

export default BlockWrapper;