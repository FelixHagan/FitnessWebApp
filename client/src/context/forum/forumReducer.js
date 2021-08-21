import {
    ADD_MESSAGE,
    ADD_TOPIC
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                topics: state.topics.map(topic => topic.id === action.payload.id 
                    ? action.payload : topic)
            }
        case ADD_TOPIC:
            return {
                ...state,
                topics: [ ...state.topics, action.payload ]
            }
        default:
            return state;
    }
}