import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import signUpImage from '../../assets/login.jfif'

import {register} from '../../actions';

class SignUp extends Component {
	constructor(){
		super()
		this.state = {
			userInfo:{
				fname: '',
				lnama: '',
				email: '',
				password: '',
			}
		}
	}

	changeHandler = e => {
		this.setState({
			userInfo:{
				// spread operator
				...this.state.userInfo,
				[e.target.name]: e.target.value,
			}
		})
	}

	registration = e =>{
		e.preventDefault();
		this.props.registration(this.state.userInfo)
		.then(() => {
			this.props.history.push('/user');
		})
	}

	render() { 
		return (
			<div className="form-wrapper">
				<div className="form-contianer">
					<h3>Create your own photo experience</h3>
					<h1>Create an account</h1>
					<form onSubmit={this.registration}>
						<div className="form-row">
							<div className="form-column">
								<p>First Name</p>
								<input type="text" placeholder='rick' onChange={this.changeHandler} value={this.fname} required/>
							</div>
							<div className="form-column">
								<p>Last Name</p>
								<input type="text" placeholder='sanchez' onChange={this.changeHandler} value={this.lname} required/>
							</div>
						</div>
						<p>E-Mail</p>
						<input type="text" placeholder='rick-sanchez@c137.uni' onChange={this.changeHandler} value={this.email} required/>
						<p>Password</p>
						<input type="password" placeholder='wabalabadubdub' onChange={this.password} required/>
						<div className="form-buttons">
							<button> <Link to='/LogIn'> LOG IN </Link></button>
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
