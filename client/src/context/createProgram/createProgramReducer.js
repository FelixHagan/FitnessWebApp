import {
    ADD_PROGRAM
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case ADD_PROGRAM:
            return {
                ...state,
                newPrograms: [ ...state.newPrograms, action.payload ]
            }
        default:
            return state;
    }
}