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
	
}
