import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Link, NavLink} from 'react-router-dom';
import {logout} from '../../actions/index';

import logo from '../../assets/LOGO.svg'

function NavagationBar (props){
	console.log('navbar.jsx says:', props)

	return(
		<div className="navagationbar-container">
		<Link to='/' className='navlink'> <img src={logo} alt="fotograph company logo"/> </Link>{' '}
		<Link to='/SignUp' className='navlink'> sign up </Link> {' '}
		<Link to='/LogIn' className='navlink'> log in </Link> {' '}
		</div>
		)
}


const mapStateToProps = state => ({
	loggedIn: state.loggedIn,
})

export default withRouter(connect(mapStateToProps, {logout})(NavagationBar));
