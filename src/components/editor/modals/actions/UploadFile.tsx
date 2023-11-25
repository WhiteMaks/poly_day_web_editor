import {FC, useState} from "react";
import BlockWrapper from "../../../common/wrappers/BlockWrapper";
import style from "./action.module.css";
import BaseIcon from "../../../common/actions/BaseIcon";
import addIcon from "../../../../resources/icons/add.svg";
import modelIcon from "../../../../resources/icons/model.svg";
import trashIcon from "../../../../resources/icons/trash.svg";
import downloadIcon from "../../../../resources/icons/download.svg";
import Encoder from "../../../../core/Encoder";
import FlexboxWrapper from "../../../common/wrappers/FlexboxWrapper";

interface UploadFileProps {
	title: string;
	newModelSourceBase64: string;

	onUpload: (base64: string) => void;
	onDelete: () => void;
}

const UploadFile: FC<UploadFileProps> = (props) => {
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	return (
		<BlockWrapper
			className={style.body_wrapper}>
			<BlockWrapper
				className={style.title_wrapper}>
				{props.title}
			</BlockWrapper>
			<FlexboxWrapper
				className={style.flex_start}>
				<BlockWrapper
					onMouseEnter={() => {
						if (props.newModelSourceBase64.length > 0) {
							setIsDeleting(true)
						}
					}}
					onMouseLeave={() => {
						if (props.newModelSourceBase64.length > 0) {
							setIsDeleting(false)
						}
					}}
					className={style.upload_file_button_wrapper}>
					{props.newModelSourceBase64.length > 0 ?
						<ExistModel
							onDelete={props.onDelete}
							isDeleting={isDeleting}/> :
						<UploadModel
							onFileUpload={file => {
								Encoder.getBase64FromFile(file, base64 => props.onUpload(base64));
							}}/>}
				</BlockWrapper>
				{props.newModelSourceBase64.length > 0 ?
					<BlockWrapper
						className={style.upload_file_button_wrapper}>
						<a
							download={props.title + ".fbx"}
							href={props.newModelSourceBase64}>
							<BaseIcon
								className={style.download_file_icon_wrapper}
								description={"Download model"}
								iconPath={downloadIcon}/>
						</a>
					</BlockWrapper> : null}

			</FlexboxWrapper>
		</BlockWrapper>
	);

}

interface UploadModelProps {
	onFileUpload: (file: File) => void;
}

const UploadModel: FC<UploadModelProps> = (props) => {

	return (
		<label
			htmlFor="getFile">
			<BaseIcon
				className={style.upload_file_icon_wrapper}
				description={"Upload model"}
				iconPath={addIcon}/>
			<input
				id={"getFile"}
				type={"file"}
				accept=".fbx"
				onChange={event => props.onFileUpload(event.target.files![0])}
				className={style.upload_file}/>
		</label>
	);

}

interface ExistModelProps {
	isDeleting: boolean;

	onDelete: () => void;
}

const ExistModel: FC<ExistModelProps> = (props) => {

	return (
		<BaseIcon
			className={style.upload_file_icon_wrapper}
			description={"Uploaded model"}
			iconPath={modelIcon}>
			{props.isDeleting ?
				<BaseIcon
					onClick={props.onDelete}
					className={`${style.upload_file_icon_wrapper} ${style.delete_file_icon_wrapper}`}
					description={"Delete model"}
					iconPath={trashIcon}/> : null}
		</BaseIcon>
	);

}

export default UploadFile;