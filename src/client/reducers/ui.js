import { SIDE_TAB_SELECT, DATA_UPDATE, FETCH_ERROR, DATA_START_TIME } from '../actions/types';

const INITIAL_STATE = {
    tabSelection: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIDE_TAB_SELECT:
            return { ...state, tabSelection: action.payload };
        case DATA_UPDATE:
            return { ...state, [action.index]: action.payload };
        case FETCH_ERROR:
            return { ...state, "fetchError": action.payload };
        case DATA_START_TIME:
            let type = action.index + 'start'
            return { ...state, [type]: action.payload }
        default:
            return state;
    }
}
