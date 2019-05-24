import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {login} from '../../actions/index';

import formImage from '../../assets/login.jfif';

class LogIn extends Component {

	state = {
		userInfo: {
			email: '',
			password: '',
		}
	}

	changeHandler = e =>{
		this.setState({
			userInfo :{
				// spread operator below
				...this.state.userInfo,
				[e.target.name] : e.target.value
			}
		})
	}
	
	login = e => {
		e.preventDefault();
		this.props.login(this.state.userInfo).then(()=> {
			this.props.history.push('/user')
		})
		}

	render() { 
		return (
			<div className="form-wrapper">
				<div className="form-container">
					<h3>Welcome Back!</h3>
					<h1> Login </h1>
					<form className='login-form' onSubmit={this.login}>
						<p>Email</p>
						<input type="email" name='email' placeholder='BestPhotographerEver' onChange={this.changeHandler} value={this.state.userInfo.email} required/>
						<p>Password</p>
						<input type="password" name='password' placeholder='bugMeNot' onChange={this.changeHandler} value={this.state.userInfo.password} required/>
						<div className="form-buttons">
							<button><Link to='/SignUp'>SIGN UP</Link></button>
							<button onClick={this.login}> LOGIN </button>
						</div>
						<div className="form-bottom">
							<h4>remember me checkbox </h4>
							<a href="#ef"> Forgot Password? </a>
						</div>
					</form>
				</div>
				<div className="form-image">
					<img src={formImage} alt="Login"/>
				</div>
			</div>
		);
	}
}
 
const mapStateToProps = state => ({
	logginIn: state.LogginIn,
	error: state.loginError,
})

export default connect(mapStateToProps, { login })(LogIn);
