import React, { Component } from 'react';

import loginImage from '../../assets/login.jfif'

class LogIn extends Component {

	render() { 
		return (
			<div className="form-wrapper">
				<div className="form-container">
					<h3>Welcome Back!</h3>
					<h1> Login </h1>
					<form>
						<p>Username</p>
						<input type="text"/>
						<p>Password</p>
						<input type="text"/>
						<div className="form-buttons">
							<button> SIGN UP </button>
							<button> LOGIN </button>
						</div>
						<div className="form-bottom">
							<h4>remember me checkbox </h4>
							<a href="#ef"> Forgot Password? </a>
						</div>
					</form>
				</div>
				<div className="form-image">
					<img src={loginImage} alt="Login"/>
				</div>
			</div>
		);
	}
}
 
export default LogIn;
