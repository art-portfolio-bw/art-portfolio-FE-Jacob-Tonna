import React, { Component } from 'react';
import CreateNewPost from './CreateNewPost';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
// import axios from 'axios';

// stretch import { getUserPosts }  from '../../actions'

class UserHome extends Component {

	render() { 
		return (
			<div className="user-home">
				user home lives here
				<CreateNewPost />
			</div>
		);
	}
}
 
export default UserHome;
