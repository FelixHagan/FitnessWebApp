import {
    GET_WORKOUTS,
    CLEAR_WORKOUTS,
    WORKOUTS_ERROR
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_WORKOUTS:
            return {
                ...state,
                workouts: action.payload,
                loading: false
            }
        case WORKOUTS_ERROR:
            return {
                ...state,
                error: action.payload
            } 
        case CLEAR_WORKOUTS:
            return {
                ...state,
                workouts: [],
                error: null
            }
        default: 
            return state;
        
    }
}