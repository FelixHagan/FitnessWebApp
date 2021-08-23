import {
    ADD_PROGRAM,
    DELETE_PROGRAM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROGRAM
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case ADD_PROGRAM:
            return {
                ...state,
                newPrograms: [ ...state.newPrograms, action.payload ]
            }
        case UPDATE_PROGRAM: 
            return {
                ...state,
                newPrograms: state.newPrograms.map(newProgram => newProgram.id === action.payload.id ? 
                    action.payload : newProgram)
            }
        case DELETE_PROGRAM:
            return {
                ...state,
                newPrograms: state.newPrograms.filter(newProgram => newProgram.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state;
    }
}