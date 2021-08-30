import {
    GET_FORUM,
    CLEAR_FORUM,
    FORUM_ERROR,
    ADD_MESSAGE,
    ADD_TOPIC
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_FORUM:
            return {
                ...state,
                topics: action.payload,
                loading: false
            }
        case FORUM_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_FORUM:
            return {
                ...state,
                topics: [],
                error: null
                }
        case ADD_MESSAGE:
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.payload._id 
                    ? action.payload : topic),
                loading: false
            }
        case ADD_TOPIC:
            return {
                ...state,
                topics: [ ...state.topics, action.payload ],
                loading: false
            }
        default:
            return state;
    }
}