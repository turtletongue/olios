import {
  SING_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGGED_OUT,
  EMAIL_INPUT_CHANGED,
  PASSWORD_INPUT_CHANGED,
  CLEAR_INPUTS
} from './auth.constants';

const initialState = {
  isLogged: false,
  token: null,
  errorMessage: null,
  emailInput: '',
  passwordInput: ''
};

const authReducer = (state=initialState, action={}) => {
  switch (action.type) {
    case SING_IN_SUCCESS:
      return { ...state, isLogged: true, token: action.payload, errorMessage: null };
    case SIGN_IN_FAILURE:
      return { ...state, errorMessage: action.payload };
    case LOGGED_OUT:
      return { ...state, isLogged: false, token: null, errorMessage: null };
    case EMAIL_INPUT_CHANGED:
      return { ...state, emailInput: action.payload };
    case PASSWORD_INPUT_CHANGED:
      return { ...state, passwordInput: action.payload };
    case CLEAR_INPUTS:
      return { ...state, emailInput: '', passwordInput: '' };
    default:
      return state;
  }
}

export default authReducer;