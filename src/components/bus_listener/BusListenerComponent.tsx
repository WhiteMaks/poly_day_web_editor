import {FC} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";
import BusClient from "../../socket/BusClient";
import ReactComponentProps from "../ReactComponentProps";
import {useGlobalDispatch} from "../../state/store";
import {busActions} from "../../state/bus/BusReducer";
import BusStatus from "../../core/enums/BusStatus";
import {OK} from "../../socket/microservices/consts/Statuses";

interface BusListenerComponentProps extends ReactComponentProps {
	bus: BusClient
}

const BusListenerComponent: FC<BusListenerComponentProps> = (props) => {
	const globalDispatch = useGlobalDispatch();

	props.bus.onConnected(() => {
		globalDispatch(busActions.updateStatus(BusStatus.CONNECTED));
	});

	props.bus.onDisconnected(() => {
		globalDispatch(busActions.updateStatus(BusStatus.OFFLINE));
	});

	props.bus.getAuthenticate().processEventIdentifyUser(event => {
		if (event.status === OK) {
			globalDispatch(busActions.updateStatus(BusStatus.AUTHORIZED));
		}
	})

	return (
		<BlockWrapper>
			{props.children}
		</BlockWrapper>
	);

}

export default BusListenerComponent;