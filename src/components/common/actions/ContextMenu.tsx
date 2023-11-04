import {FC, useEffect, useRef} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";
import style from "./action.module.css";

interface ContextMenuProps {
	positionX: number;
	positionY: number;

	clickOnDelete: () => void;
	clickOnOutSide: () => void;
}

const ContextMenu: FC<ContextMenuProps> = (props) => {
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
			<BlockWrapper
				className={style.context_menu_action}
				onClick={() => {
					props.clickOnDelete();
					props.clickOnOutSide();
				}}>
				Delete
			</BlockWrapper>
			<BlockWrapper
				className={style.context_menu_action}
				onClick={() => {
					props.clickOnOutSide();
				}}>
				Rename
			</BlockWrapper>
		</BlockWrapper>
	);

}

export default ContextMenu;