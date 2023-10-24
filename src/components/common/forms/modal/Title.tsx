import React, {FC} from "react";
import BlockWrapper from "../../wrappers/BlockWrapper";

interface TitleProps {
	value: string
}

const Title: FC<TitleProps> = (props) => {

	return (
		<BlockWrapper>
			{props.value}
		</BlockWrapper>
	);

}

export default Title;