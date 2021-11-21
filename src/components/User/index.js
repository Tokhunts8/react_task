import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

class User extends React.Component {

	state = {
		isInputFileHidden: true
	};

	toggleInputFileAction = () => {
		this.setState({
			isInputFileHidden: !this.state.isInputFileHidden
		})
	}

	uploadFileAction = (e) => {
		const file = e.target.files[0];
		this.props.uploadFile(file);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isUploadLoading !== this.props.isUploadLoading && this.props.isUploadLoading === false ) {
			if(this.props.errorUpload !== null && this.props.errorUpload) {
				alert('error ' + JSON.stringify(this.props.errorUpload));
			} else if (this.props.errorUpload === false) {
				alert('success');
			}
		}
	}

	render() {
		const { user } = this.props;
		const { isInputFileHidden } = this.state;
		return (
			<>
				<p onClick={this.toggleInputFileAction}>
					{user.avatar && (<img src={user.avatar} alt={user.avatar} />)}
					{!user.avatar && (<span>{user.first_name.charAt(0)} {user.last_name.charAt(0)}</span>)}
				</p>

				{!isInputFileHidden && (
					<input type='file' onChange={this.uploadFileAction} />
				)}
			</>
		);
	}
}

const User_W = connect(mapStateToProps("User"), mapDispatchToProps("User"))(User);

export default User_W;
