import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
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

		default:
			return state;
	}
}

export default reducer;
