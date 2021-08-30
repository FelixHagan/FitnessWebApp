import {
    GET_PROGRAM,
    CLEAR_PROGRAM,
    PROGRAM_ERROR,
    ADD_PROGRAM,
    DELETE_PROGRAM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROGRAM
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_PROGRAM:
            return {
                ...state,
                newPrograms: action.payload,
                loading: false
            }
        case ADD_PROGRAM:
            return {
                ...state,
                newPrograms: [ ...state.newPrograms, action.payload ],
                loading: false
            }
        case UPDATE_PROGRAM: 
            return {
                ...state,
                newPrograms: state.newPrograms.map(newProgram => newProgram._id === action.payload._id ? 
                    action.payload : newProgram),
                loading: false
            }
        case DELETE_PROGRAM:
            return {
                ...state,
                newPrograms: state.newPrograms.filter(newProgram => newProgram._id !== action.payload),
                loading: false
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
        case CLEAR_PROGRAM:
            return {
                ...state,
                newPrograms: [],
                current: null,
                error: null
            }
        case PROGRAM_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}