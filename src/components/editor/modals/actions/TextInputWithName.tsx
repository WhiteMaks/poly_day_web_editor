import {FC} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./action.module.css";

interface TextInputWithNameProps {
	name: string;
	value: string;
	onChange: (value: string) => void;
}

const TextInputWithName: FC<TextInputWithNameProps> = (props) => {

	return (
		<BlockWrapper
			className={style.body_wrapper}>
			<BlockWrapper
				className={style.title_wrapper}>
				{props.name}
			</BlockWrapper>
			<input
				className={style.input_wrapper}
				onChange={event => {
					props.onChange(event.target.value)
				}}
				value={props.value}/>
		</BlockWrapper>
	);

}

export default TextInputWithName;