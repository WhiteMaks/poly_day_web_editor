import React from "react";

interface ReactComponentProps {
	className?: string;

	children?: React.ReactNode;

	onClick?: () => void
}

export default ReactComponentProps;