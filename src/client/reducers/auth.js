import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
    jwt: '',
    user: '',
    errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, jwt: action.payload.token, user: action.payload.user };
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}