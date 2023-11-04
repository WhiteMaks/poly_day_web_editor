import React, {LegacyRef} from "react";

interface ReactComponentProps {
	className?: string;

	style?: React.CSSProperties;

	children?: React.ReactNode;

	innerRef?: LegacyRef<HTMLDivElement>;

	onClick?: () => void

	onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default ReactComponentProps;