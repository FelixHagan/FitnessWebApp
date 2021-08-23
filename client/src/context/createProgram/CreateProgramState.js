import React, { useReducer } from 'react';
import CreateProgramContext from './createProgramContext';
import createProgramReducer from './createProgramReducer';
import {
    ADD_PROGRAM,
    DELETE_PROGRAM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROGRAM
} from '../types';

const CreateProgramState = props => {
    const initialState = {
        newPrograms: [
            
        ],
        current: null
    }

    const [state, dispatch] = useReducer(createProgramReducer, initialState);

    // add a program 
    const addNewProgram = newProgram => {
        dispatch({ type: ADD_PROGRAM, payload: newProgram });
    }

    // delete program
    const deleteProgram = id => {
        dispatch({ type: DELETE_PROGRAM, payload: id });
    }

    // Set Current Program
    const setCurrent = newProgram => {
        dispatch({ type: SET_CURRENT, payload: newProgram});
    }

    // Clear Current Program
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Program
    const updateProgram = newProgram => {
        dispatch({ type: UPDATE_PROGRAM, payload: newProgram });
    }

    return (
        <CreateProgramContext.Provider
        value={{
            newPrograms: state.newPrograms,
            current: state.current,
            addNewProgram,
            deleteProgram,
            setCurrent,
            clearCurrent,
            updateProgram
        }}>
            {props.children}
        </CreateProgramContext.Provider>
    )
}

export default CreateProgramState;