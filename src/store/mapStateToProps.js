function mapStateToProps(component) {
	switch (component) {
		case 'User': {
			return function (state) {
				return state.userReducer;
			};
		}
		default: return undefined;
	}
}

export default mapStateToProps;
