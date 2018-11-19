import {
    AUTH_USER,
    AUTH_ERROR,
    SIDE_TAB_SELECT,
    FETCH_ERROR,
    DATA_UPDATE,
    DATA_START_TIME
} from './types';

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

export const clearerror = () => {
    return {
        type: AUTH_ERROR,
        payload: ''
    };
};

export const signin = (formProps, callback) => async dispatch => {
    //Redux thunk gives us total control over dispatching of actions and this is why I can return a function here
    //Similar to redux-promise but is less limited because redux-promise can only return the one promise not the ability to dispatch many actions
    try {
        const response = await axios.post('http://localhost:8080/signin', formProps);
        dispatch({ type: AUTH_USER, payload: response.data });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid Login Credentials' });
    }
};

export const tabSelect = (type, time) => async (dispatch, getState) => {
    if ((time - getState()["ui"][type + "start"]) / 1000 > 5) {
        dispatch({ type: SIDE_TAB_SELECT, payload: type })
        try {
            const response = await axios.get('http://localhost:8080/data/' + type, { headers: { "Authorization": getState()["auth"]["jwt"] } });
            dispatch({ type: DATA_UPDATE, index: type, payload: response.data })
            dispatch({ type: DATA_START_TIME, index: type, payload: Date.now() })
        } catch (e) {
            dispatch({ type: FETCH_ERROR, payload: 'Database query error' });
        }
    }
    else {
        dispatch({ type: FETCH_ERROR, payload: 'Polling DB too often' });
    }
}