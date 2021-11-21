import UPLOAD_FILE from '../actions/uploadFile';
import initialState from '../initialState';

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case UPLOAD_FILE: return state;
		default: return state;
	}
}
