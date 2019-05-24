import axios from 'axios';
// import { axiosWithAuth } from '../components/auth/axiosWithAuth';

const URL = 'https://artportfoliobw.herokuapp.com';
// .post(`${URL}/SomeLinkHere`, somethingProbablyCreds)

// logging in

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
	dispatch({
		type: LOGIN_START,
	});
	return axios
		.post(`${URL}/LogIn`, creds)
		.then(res =>{
			localStorage.setItem('token', res.data.token);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			})
			localStorage.setItem('user', res.data.artistId)
		})
		.catch(err => {
			console.log(err)
			dispatch({
				type: LOGIN_FAILURE,
			})
		})
}

// log out

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch =>{
	localStorage.clear();
	dispatch({
		type: LOGOUT,
	})

}

// registration 

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'LOGIN_FAILURE';

export const register = creds => dispatch => {
	dispatch({
		type: REGISTER_START
	});
	return axios
		.post(`${URL}/SignUp`, creds)
		.then(res => {
			localStorage.setItem('token', res.data.token);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			})
			localStorage.setItem('user', res.data.artistId)
		})
		.catch(err => {
			console.log('registration error?', err)
			dispatch({
				type: REGISTER_FAILURE,
			})
		})
}

// personal stretch 

export const GET_USERS_POSTS_START = 'GET_USERS_POSTS_START';
export const GET_USERS_POSTS_SUCCESS = 'GET_USERS_POSTS_SUCCESS';
export const GET_USERS_POSTS_FAILURE = 'GET_USERS_POSTS_FAILURE';

export const getUsersPosts = () => dispatch =>{
	dispatch({
		type: GET_USERS_POSTS_START
	})
	
}
