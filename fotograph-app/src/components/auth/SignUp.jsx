import React, { Component } from 'react';

import signUpImage from '../../assets/login.jfif'


class SignUp extends Component {
	
	render() { 
		return (
			<div className="form-wrapper">
				<div className="form-contianer">
					<h3>Create your own photo experience</h3>
					<h1>Create an account</h1>
					<form>
						<div className="form-row">
							<div className="form-column">
								<p>First Name</p>
								<input type="text"/>
							</div>
							<div className="form-column">
								<p>Last Name</p>
								<input type="text"/>
							</div>
						</div>
						<p>E-Mail</p>
						<input type="text"/>
						<p>Password</p>
						<input type="password"/>
						<p>Confirm Password</p>
						<input type="password"/>
						<div className="form-buttons">
							<button>SIGN UP</button>
						</div>
					</form>
				</div>
				<div className="form-image">
					<img src={signUpImage} alt="SignUp"/>
				</div>
			</div>
			);
	}
}
 
export default SignUp;
