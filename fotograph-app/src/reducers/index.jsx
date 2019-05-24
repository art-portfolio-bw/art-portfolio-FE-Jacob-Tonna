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
	LoggingIn: false,
	loggedIn: false,
	loginError: '',

	// SignUp Stuff
	Registering: false,
	Registered: false,
	RegistrationError: '',

	// stretch stuff
};

// reducer

const reducer = (state = initialState, action) =>{
	switch(action.type){

		// login stuff

		case LOGIN_START:
			return{
				...state,
				LoggingIn: false,
				loginError: '',
			}
		case LOGIN_SUCCESS:
				return{
					...state,
					LoggingIn: false,
					loggedIn: true,
					loginError: '',
					// action payload here
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
				// action payload here
			}
		
		case REGISTER_FAILURE:
			return{
				...state,
				RegistrationError: '',
			}
	}
}
