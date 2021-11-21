import { bindActionCreators } from 'redux';
import uploadFile from './actionCreators/uploadFile';

function mapDispatchToProps(component) {
	switch (component) {
		case 'User': return function (dispatch) {
			return {
				uploadFile: bindActionCreators(uploadFile, dispatch),
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps;
