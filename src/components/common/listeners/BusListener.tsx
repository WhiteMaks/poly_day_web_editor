import {FC, useEffect} from "react";
import BlockWrapper from "../wrappers/BlockWrapper";
import BusClient from "../../../service_bus/BusClient";
import ReactComponentProps from "../ReactComponentProps";
import {useGlobalDispatch} from "../../../state/store";
import {busActions} from "../../../state/bus/BusReducer";
import BusStatus from "../../../core/enums/BusStatus";
import {OK} from "../../../service_bus/microservices/consts/Statuses";
import {releaseActions} from "../../../state/develop/release/ReleaseReducer";

interface BusListenerProps extends ReactComponentProps {
	bus: BusClient
}

const BusListener: FC<BusListenerProps> = (props) => {
	const globalDispatch = useGlobalDispatch();

	useEffect(() => {
		props.bus.onConnected(() => {
			globalDispatch(busActions.updateStatus(BusStatus.CONNECTED));
		});

		props.bus.onDisconnected(() => {
			globalDispatch(busActions.updateStatus(BusStatus.OFFLINE));
		});

		props.bus.getAuthenticate().processEventIdentifyUser10(event => {
			if (event.status === OK) {
				globalDispatch(busActions.updateStatus(BusStatus.AUTHORIZED));
			}
		});

		props.bus.getDeveloperService().processEventCreateRelease10(event => {
			console.log(event);
		});

		props.bus.getDeveloperService().processEventGetReleases10(event => {
			if (event.status === OK) {
				globalDispatch(releaseActions.updateReleases(event.body.releases));
			}
		});
	}, [props.bus, globalDispatch]);

	return (
		<BlockWrapper>
			{props.children}
		</BlockWrapper>
	);

}

export default BusListener;