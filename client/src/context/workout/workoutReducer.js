import {
    GET_WORKOUTS,
    CLEAR_WORKOUTS,
    WORKOUTS_ERROR,
    FILTER_WORKOUTS,
    CLEAR_FILTER,
    FIND_SPECIFIC,
    CLEAR_SPECIFIC
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
                error: null,
                filtered: null,
                specificWorkout: null
            }
        case FILTER_WORKOUTS: 
            return {
                ...state,
                filtered: state.workouts.filter((workout) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return workout.fitnessLevel.match(regex);
                })
            }
        case FIND_SPECIFIC:
            return {
                ...state,
                specificWorkout: state.workouts.filter((workout) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return workout.name.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case CLEAR_SPECIFIC:
            return {
                ...state,
                specificWorkout: null
            }
        default: 
            return state;
        
    }
}