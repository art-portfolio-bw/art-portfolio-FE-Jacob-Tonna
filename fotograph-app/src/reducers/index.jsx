import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
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
		
		// registration stuff
		
	}
}
