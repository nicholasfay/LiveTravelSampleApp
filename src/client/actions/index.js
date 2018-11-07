import { AUTH_USER, AUTH_ERROR, SIDE_TAB_SELECT } from './types';
import axios from 'axios'

export const signup = (formProps, callback) => async dispatch => {
    //Redux thunk gives us total control over dispatching of actions and this is why I can return a function here
    //Similar to redux-promise but is less limited because redux-promise can only return the one promise not the ability to dispatch many actions
    try {
        const response = await axios.post('http://localhost:8080/signup', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};

export const signin = (formProps, callback) => async dispatch => {
    //Redux thunk gives us total control over dispatching of actions and this is why I can return a function here
    //Similar to redux-promise but is less limited because redux-promise can only return the one promise not the ability to dispatch many actions
    try {
        const response = await axios.post('http://localhost:8080/signin', formProps);
        console.log(response.data)
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid Login Credentials' });
    }
};

export const tabSelect = (type) => dispatch => {
    dispatch({ type: SIDE_TAB_SELECT, payload: type })
}