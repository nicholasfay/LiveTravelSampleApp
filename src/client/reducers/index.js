import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import ui from './ui';

export default combineReducers({
    auth,
    ui,
    form: formReducer
});