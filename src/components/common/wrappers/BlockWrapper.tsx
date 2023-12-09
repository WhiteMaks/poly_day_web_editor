import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";

const BlockWrapper: FC<ReactComponentProps> = (props) => {

	return (
		<div
			id={props.id}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			ref={props.innerRef}
			style={props.style}
			onContextMenu={props.onContextMenu}
			onDoubleClick={props.onDoubleClick}
			onClick={props.onClick}
			draggable={props.draggable}
			onDragStart={props.onDragStart}
			onDragOver={props.onDragOver}
			onDrop={props.onDrop}
			className={props.className}>
			{props.children}
		</div>
	);

}

export default BlockWrapper;