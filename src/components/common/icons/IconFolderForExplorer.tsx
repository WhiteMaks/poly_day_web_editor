import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import BlockWrapper from "../wrappers/BlockWrapper";

const IconFolderForExplorer: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper>
			<svg
				className={props.className}
				width="75"
				height="65"
				viewBox="0 0 75 65"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M72.2679 5.41667H35.8929L31.3393 0.812501L29.4643 0H2.67857L0 2.70833V62.2917L2.67857 65H72.3214L75 62.2917V8.125L72.2679 5.41667ZM69.5357 51.4042V59.5833H5.25V27.0833H29.3036L31.1786 26.2708L35.7857 21.6125H69.5893V29.7375L69.5357 51.4042ZM69.5357 16.25H34.7143L32.8393 17.0625L28.2321 21.7208H5.30357V5.47083H28.2857L32.8393 10.075L34.7679 10.8875H69.5893L69.5357 16.25Z"
					fill="currentColor"/>
			</svg>
		</BlockWrapper>
	);

}

export default IconFolderForExplorer;