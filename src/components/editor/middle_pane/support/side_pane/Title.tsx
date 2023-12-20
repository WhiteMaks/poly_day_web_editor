import {FC} from "react";
import BlockWrapper from "../../../../common/wrappers/BlockWrapper";
import style from "./side_pane.module.css";

interface TitleProps {
	value: string
}

const Title: FC<TitleProps> = (props) => {

	return (
		<BlockWrapper
			className={style.title}>
			{props.value}
		</BlockWrapper>
	);

}

export default Title;