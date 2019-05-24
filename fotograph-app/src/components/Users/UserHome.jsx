import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

// stretch import { getUserPosts }  from '../../actions'

class UserHome extends Component {
	state = {
		user: []
	}
	componentDidMount() {
		axios
			.get(``)
	}
	render() { 
		return (
			<div className="user-home">
				user home lives here
			</div>
		);
	}
}
 
export default UserHome;
