import {
    GET_MESSAGE,
    CLEAR_MESSAGES,
    MESSAGE_ERROR,
    ADD_COACHMESSAGE,
    ADD_REPLY
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                messages: action.payload,
                loading: false
            }
        case MESSAGE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                messages: [],
                error: null
                }
        case ADD_COACHMESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, action.payload ],
                loading: false
            }
        case ADD_REPLY:
            return {
                ...state,
                messages: state.messages.map(message => message._id === action.payload._id 
                    ? action.payload : message),
                loading: false
            }
        default:
            return state;
    }
}