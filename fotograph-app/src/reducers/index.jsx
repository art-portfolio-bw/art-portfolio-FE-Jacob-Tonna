import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	GET_USERS_POSTS_START,
	GET_USERS_POSTS_SUCCESS,
} from '../actions'

const initialState = {
	//LogIn Stuff
	loggingIn: false,
	loggedIn: false,
	loginError: '',

	// SignUp Stuff
	Registering: false,
	Registered: false,
	RegistrationError: '',

	// user data stuff
	getUsersPosts: false,

	// important stuff
	user: {},

	// stretch stuff

};

// reducer

const reducer = (state = initialState, action) =>{
	switch(action.type){

		// login stuff

		case LOGIN_START:
			return{
				...state,
				loggingIn: false,
				loginError: '',
			}
		case LOGIN_SUCCESS:
				return{
					...state,
					loggingIn: false,
					loggedIn: true,
					loginError: '',
					user: action.payload,
				}

		case LOGIN_FAILURE:
			return {
				...state,
				loggedIn: false,
			}
		
		// log out

		case LOGOUT:
			return {
				...state,
				loggedIn: false,
			}

		// registration stuff

		case REGISTER_START:
			return{
				...state,
				Registering: true,
				RegistrationError: '',
			}

		case REGISTER_SUCCESS:
			return{
				...state,
				Registering: false,
				Registered: true,
				RegistrationError: '',
				user: action.payload,
			}
		
		case REGISTER_FAILURE:
			return{
				...state,
				RegistrationError: '',
			}

		// user post stuff

		case GET_USERS_POSTS_START:
			return{
				...state,
					getUsersPosts: true,
					error: '',
					user: state.user,
					loggedIn: true,
			}
		
		case GET_USERS_POSTS_SUCCESS:
			return{
				...state,
				getUsersPosts: false,
				error: '',
				user: state.user,
				loggedIn: true,

			}

		default:
			return state;
	}
}

export default reducer;
