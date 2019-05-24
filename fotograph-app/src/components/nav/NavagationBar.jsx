import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Link, NavLink} from 'react-router-dom';
import {logout} from '../../actions/index';

import logo from '../../assets/LOGO.svg'

function NavagationBar (props){

	return(
		<div className="navagationbar-container">
		<Link to='/' className='navlink'> <img src={logo} alt="fotograph company logo"/> </Link>{' '}

		{props.loggedIn && <NavLink className='navlink' to='/UserHome'> My Posts </NavLink>}

		<div>
			{props.loggedIn ? (
			<Link className='navlink' to='/' onClick={props.logout}> Log Out </Link>
			) : (
			<Link className='navlink' to='/login'>Login or Sign UP</Link>
			)
			}
		</div>
		</div>
		)
}


const mapStateToProps = state => ({
	loggedIn: state.loggedIn,
})

export default withRouter(connect(mapStateToProps, {logout})(NavagationBar));
