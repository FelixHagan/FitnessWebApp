import {
    GET_RUNNING,
    RUNNING_ERROR
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_RUNNING:
            return {
                ...state,
                programs: action.payload,
                loading: false
            }
        case RUNNING_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
        
    }
}