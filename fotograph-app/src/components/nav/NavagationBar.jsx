import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/LOGO.svg'

function NavagationBar (){
	return(
		<div className="navagationbar-container">
		<Link to='/' className='navlink'> <img src={logo} alt="fotograph company logo"/> </Link>{' '}
		<Link to='/SignUp' className='navlink'> sign up </Link> {' '}
		<Link to='/LogIn' className='navlink'> log in </Link> {' '}
		</div>
		)
}

export default NavagationBar;
