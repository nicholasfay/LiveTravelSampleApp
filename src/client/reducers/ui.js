import { SIDE_TAB_SELECT } from '../actions/types';

const INITIAL_STATE = {
    tabSelection: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIDE_TAB_SELECT:
            return { ...state, tabSelection: action.payload };
        default:
            return state;
    }
}