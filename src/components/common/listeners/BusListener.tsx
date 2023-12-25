import {FC, useEffect} from "react";
import BusClient from "../../../service_bus/BusClient";
import ReactComponentProps from "../ReactComponentProps";
import {useGlobalDispatch, useGlobalSelector} from "../../../state/store";
import {busActions} from "../../../state/bus/BusReducer";
import BusStatus from "../../../core/enums/BusStatus";
import {OK} from "../../../service_bus/microservices/consts/Statuses";
import {releaseActions} from "../../../state/develop/release/ReleaseReducer";
import {entityActions} from "../../../state/develop/entity/EntityReducer";
import Common from "../../../core/Common";
import {sourceActions} from "../../../state/develop/source/SourceReducer";
import {shaderProgramActions} from "../../../state/develop/shader_program/ShaderProgramReducer";

interface BusListenerProps extends ReactComponentProps {
	bus: BusClient
}

const BusListener: FC<BusListenerProps> = (props) => {
	const globalDispatch = useGlobalDispatch();
	const {
		selectedRelease
	} = useGlobalSelector(state => state.releaseReducer);

	useEffect(() => {
		props.bus.onConnected(() => {
			globalDispatch(busActions.updateStatus(BusStatus.CONNECTED));

			props.bus.getAuthenticate().identifyUser10(Common.getTokenInLocalStorage());
		});

		props.bus.onDisconnected(() => {
			globalDispatch(busActions.updateStatus(BusStatus.OFFLINE));
		});

		props.bus.getAuthenticate().processEventIdentifyUser10(event => {
			if (event.status === OK) {
				globalDispatch(busActions.updateStatus(BusStatus.AUTHORIZED));
				props.bus.getDeveloperService().getReleases10();
				props.bus.getDeveloperService().getEntities10();
			}
		});

		props.bus.getDeveloperService().processEventCreateRelease10(event => {
			if (event.status === OK) {
				props.bus.getDeveloperService().getReleases10();
			}
		});

		props.bus.getDeveloperService().processEventDeleteRelease10(event => {
			if (event.status === OK) {
				props.bus.getDeveloperService().getReleases10();
			}
		});

		props.bus.getDeveloperService().processEventGetReleases10(event => {
			if (event.status === OK) {
				const releases = event.body.releases;

				globalDispatch(releaseActions.updateReleases(releases));

				if (releases.length > 0) {
					globalDispatch(releaseActions.updateSelectedRelease(releases[0]));
				}
			}
		});

		props.bus.getDeveloperService().processEventGetEntities10(event => {
			if (event.status === OK) {
				globalDispatch(entityActions.updateEntities(event.body.entities));
			}
		});

		props.bus.getDeveloperService().processEventCreateEntity10(event => {
			if (event.status === OK) {
				props.bus.getDeveloperService().getEntities10();
			}
		});

		props.bus.getDeveloperService().processEventDeleteEntity10(event => {
			if (event.status === OK) {
				props.bus.getDeveloperService().getEntities10();
			}
		});

		props.bus.getDeveloperService().processEventSaveModelSource10(event => {
			console.log(event); //todo remove
		});

		props.bus.getDeveloperService().processEventGetModelSource10(event => {
			if (event.status === OK) {
				globalDispatch(sourceActions.updateModel(event.body));
			}
		});

		props.bus.getDeveloperService().processEventSaveShaderSource10(event => {
			console.log(event); //todo remove
		});

		props.bus.getDeveloperService().processEventGetShaderSource10(event => {
			if (event.status === OK) {
				globalDispatch(sourceActions.updateShader(event.body));
			}
		});

		props.bus.getDeveloperService().processEventGetShaderPrograms10(event => {
			globalDispatch(shaderProgramActions.updateShaderPrograms(event.body.shader_programs));
		});
	}, [props.bus, globalDispatch]);

	useEffect(() => {
		props.bus.getDeveloperService().processEventCreateShaderProgram10(event => {
			if (event.status === OK && selectedRelease) {
				props.bus.getDeveloperService().getShaderPrograms10(selectedRelease.id);
			}
		});

		props.bus.getDeveloperService().processEventDeleteShaderProgram10(event => {
			if (event.status === OK && selectedRelease) {
				props.bus.getDeveloperService().getShaderPrograms10(selectedRelease.id);
			}
		});

		props.bus.getDeveloperService().processEventCreateShaderProgramObject10(event => {
			if (event.status === OK && selectedRelease) {
				props.bus.getDeveloperService().getShaderPrograms10(selectedRelease.id);
			}
		});

		props.bus.getDeveloperService().processEventDeleteShaderProgramObject10(event => {
			if (event.status === OK && selectedRelease) {
				props.bus.getDeveloperService().getShaderPrograms10(selectedRelease.id);
			}
		});
	}, [props.bus, selectedRelease]);

	return null;

}

export default BusListener;