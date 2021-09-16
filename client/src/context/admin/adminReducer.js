import {
    GET_USERS,
    CLEAR_USERS,
    USERS_ERROR,
    DELETE_USER,
    FILTER_USERS,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case USERS_ERROR:
            return {
                ...state,
                error: action.payload
            } 
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                error: null
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload),
                loading: false
            }
        case FILTER_USERS: 
            return {
                ...state,
                filtered: state.users.filter((user) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return user.name.match(regex);
                })
            }
        case CLEAR_FILTER: 
            return {
                ...state,
                filtered: null 
            }
        default: 
            return state;
        
    }
}