import {FC} from "react";
import ReactComponentProps from "../ReactComponentProps";
import BlockWrapper from "../wrappers/BlockWrapper";

const IconMusic: FC<ReactComponentProps> = (props) => {

	return (
		<BlockWrapper>
			<svg
				className={props.className}
				xmlns="http://www.w3.org/2000/svg"
				width="55"
				height="65"
				viewBox="0 0 55 65"
				fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M26.9365 0C33.1406 9.5799 39.9144 15.2049 44.2298 18.318C47.6377 20.7765 66.3237 31.7059 44.789 48.788C57.5769 32.0599 52.9766 22.146 30.1019 16.0333V51.4402C30.8193 66.0238 7.15324 66.9123 1.39235 63.0309C-4.56901 59.0293 9.48505 45.735 26.9365 50.1041V0Z"
					fill="currentColor"/>
			</svg>
		</BlockWrapper>
	);

}

export default IconMusic;