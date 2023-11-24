import React, {LegacyRef} from "react";

interface ReactComponentProps {
	className?: string;

	style?: React.CSSProperties;

	children?: React.ReactNode;

	innerRef?: LegacyRef<HTMLDivElement>;

	onClick?: () => void

	onDoubleClick?: () => void

	onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;

	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export default ReactComponentProps;