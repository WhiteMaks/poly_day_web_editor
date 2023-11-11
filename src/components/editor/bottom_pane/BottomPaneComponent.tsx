import {FC} from "react";
import style from "./bottom_pane.module.css";
import {useGlobalDispatch} from "../../../state/store";
import EntityExplorer from "./EntityExplorer";
import {contextMenuActions} from "../../../state/context_menu/ContextMenuReducer";
import FlexboxWrapper from "../../common/wrappers/FlexboxWrapper";

interface BottomPaneComponentProps {
}

const BottomPaneComponent: FC<BottomPaneComponentProps> = (props) => {
	const globalDispatch = useGlobalDispatch();

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			<EntityExplorer
				onContext={(x, y) => {
					globalDispatch(contextMenuActions.updateCreateEntityX(x));
					globalDispatch(contextMenuActions.updateCreateEntityY(y));
					globalDispatch(contextMenuActions.updateCreateEntityIsDisplayed(true));
				}}/>
		</FlexboxWrapper>
	);

}

export default BottomPaneComponent;