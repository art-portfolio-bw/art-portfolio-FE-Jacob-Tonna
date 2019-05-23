import React from 'react';
import { Link } from 'react-router-dom';

function NavagationBar (){
	return(
		<div className="navagationbar-container">
		<Link to='/' className='navlink'> Logo </Link>{' '}
		<Link to='/SignUp' className='navlink'> sign up </Link> {' '}
		<Link to='/LogIn' className='navlink'> log in </Link> {' '}
		</div>
		)
}

export default NavagationBar;
