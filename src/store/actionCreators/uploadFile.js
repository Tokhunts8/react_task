import UPLOAD_FILE from '../actions/uploadFile';

function uploadFile(value) {
	console.log(value);

	return {
		type: UPLOAD_FILE,
		file: value
	};
}

export default uploadFile;
