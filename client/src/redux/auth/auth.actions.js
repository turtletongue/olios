import {
  SING_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGGED_OUT,
  EMAIL_INPUT_CHANGED,
  PASSWORD_INPUT_CHANGED,
  CLEAR_INPUTS
} from './auth.constants';

export const startSignIn = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const json = await res.json();
      if (json.token) {
        dispatch(signInSuccess(json.token));
        localStorage.setItem('token', json.token);
        localStorage.setItem('expiryDate', Date.now() + 60 * 60 * 1000); // 1h
        dispatch(clearInputs());
      } else {
        dispatch(signInFailed(new Error('Sign In failed.')));
      }
    } catch (error) {
      dispatch(signInFailed(error));
    }
  };
}

export const signInSuccess = (token) => ({
  type: SING_IN_SUCCESS,
  payload: token
});

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error.message
});

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiryDate');
  return {
    type: LOGGED_OUT
  }
};

export const changeEmailInput = (email) => ({
  type: EMAIL_INPUT_CHANGED,
  payload: email
});

export const changePasswordInput = (password) => ({
  type: PASSWORD_INPUT_CHANGED,
  payload: password
});

export const clearInputs = () => ({
  type: CLEAR_INPUTS
});