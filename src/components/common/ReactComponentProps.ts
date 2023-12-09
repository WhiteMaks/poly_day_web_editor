import React, {LegacyRef} from "react";

interface ReactComponentProps {
	id?: string;
	className?: string;

	style?: React.CSSProperties;

	children?: React.ReactNode;

	innerRef?: LegacyRef<HTMLDivElement>;

	onClick?: () => void

	onDoubleClick?: () => void

	onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;

	onMouseEnter?: () => void;
	onMouseLeave?: () => void;

	draggable?: boolean;
	onDrop?: (event: React.DragEvent<HTMLDivElement>) => void
	onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
	onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void
}

export default ReactComponentProps;