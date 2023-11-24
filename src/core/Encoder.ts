class Encoder {

	public static getBase64FromFile(file: File, callback: (base64: string) => void): void {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => callback(reader.result!.toString());
		reader.onerror = (error) => console.log(error);
	}

}

export default Encoder;