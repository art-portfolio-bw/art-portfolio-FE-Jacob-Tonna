import React, { Component } from 'react';
import { Route, Redirect } from 'reacr-router-dom';

class PrivateRoute extends Component {
	render() { 
		return (
			<div className="private-route">
				this is the private route
			</div>
		);
	}
}
 
export default PrivateRoute;
