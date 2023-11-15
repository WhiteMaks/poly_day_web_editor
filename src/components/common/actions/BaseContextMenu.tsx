import {FC, useEffect, useRef} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";
import style from "./action.module.css";
import ReactComponentProps from "../ReactComponentProps";

interface BaseContextMenuProps extends ReactComponentProps {
	positionX: number;
	positionY: number;

	clickOnOutSide: () => void;
}

const BaseContextMenu: FC<BaseContextMenuProps> = (props) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutSideClick = (event: any) => {
			if (!ref.current?.contains(event.target)) {
				props.clickOnOutSide();
			}
		};

		window.addEventListener("mousedown", handleOutSideClick);

		return () => {
			window.removeEventListener("mousedown", handleOutSideClick);
		};
	}, [ref, props]);

	return (
		<BlockWrapper
			innerRef={ref}
			style={{
				top: `${props.positionY}px`,
				left: `${props.positionX}px`
			}}
			className={style.context_menu}>
			{props.children}
		</BlockWrapper>
	);

}

export default BaseContextMenu;