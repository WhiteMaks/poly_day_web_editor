import {FC} from "react";
import BlockWrapper from "../../../../common/wrappers/BlockWrapper";
import style from "./window.module.css";
import IconButton from "../../../../common/actions/IconButton";
import greenIcon from "../../../../../resources/icons/indicator_green.svg";
import yellowIcon from "../../../../../resources/icons/indicator_yellow.svg";
import redIcon from "../../../../../resources/icons/indicator_red.svg";
import {useGlobalSelector} from "../../../../../state/store";
import BusStatus from "../../../../../core/enums/BusStatus";

const ConnectionIndicator: FC = () => {
	const {
		status
	} = useGlobalSelector(state => state.busReducer);

	const renderIcon = () => {
		switch (status) {
			case BusStatus.AUTHORIZED: {
				return (
					<IconButton
						description={"Status authorized"}
						iconPath={greenIcon}/>
				);
			}

			case BusStatus.CONNECTED: {
				return (
					<IconButton
						description={"Status connected"}
						iconPath={yellowIcon}/>
				);
			}

			case BusStatus.OFFLINE: {
				return (
					<IconButton
						description={"Status offline"}
						iconPath={redIcon}/>
				);
			}
		}
	}

	return (
		<BlockWrapper
			className={style.connection_indicator}>
			{renderIcon()}
		</BlockWrapper>
	);

}

export default ConnectionIndicator;