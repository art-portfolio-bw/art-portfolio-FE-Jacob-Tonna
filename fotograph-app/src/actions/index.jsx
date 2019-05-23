import axios from 'axios';
import { token } from '../token';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
	dispatch({
		type: LOGIN_START,
	});
	return axios
		.post('https://artportfoliobw.herokuapp.com/login', creds)
		.then(res =>{
			console.log('actions index login:', res)
			localStorage.setItem('token', res.data.token)
		})
}
