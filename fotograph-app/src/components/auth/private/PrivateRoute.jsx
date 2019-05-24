import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// https://tylermcginnis.com/react-router-protected-routes-authentication/

const PrivateRoute = ({ component: Component, ...rest })=>{
	return(
		<Route {...rest} render={() => {
			if (localStorage.getItem('token')){
				return <Component />
			} else {
				return <Redirect to='/login' />
			}
		}} />
	)
}
 
export default PrivateRoute;
