import {FC} from "react";
import CreateReleaseButton from "./actions/CreateReleaseButton";
import FlexboxWrapper from "../../common/wrappers/FlexboxWrapper";
import style from "./top_pane.module.css";
import ReleaseTabsContainer from "./containers/ReleaseTabsContainer";
import {useGlobalDispatch} from "../../../state/store";
import {releaseActions} from "../../../state/develop/release/ReleaseReducer";
import {modalActions} from "../../../state/modal/ModalReducer";

const TopPaneComponent: FC = () => {
	const globalDispatch = useGlobalDispatch();

	return (
		<FlexboxWrapper
			className={style.wrapper}>
			<CreateReleaseButton
				onClick={() => globalDispatch(modalActions.updateCreateReleaseIsDisplayed(true))}/>
			<ReleaseTabsContainer
				onSelectReleaseTab={release => globalDispatch(releaseActions.updateSelectedRelease(release))}/>
		</FlexboxWrapper>
	);

}

export default TopPaneComponent;