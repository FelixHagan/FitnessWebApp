import React, { useReducer } from 'react';
import CreateProgramContext from './createProgramContext';
import createProgramReducer from './createProgramReducer';
import {
    ADD_PROGRAM
} from '../types';

const CreateProgramState = props => {
    const initialState = {
        newPrograms: [
        ]
        
    }

    const [state, dispatch] = useReducer(createProgramReducer, initialState);

    // add a program 
    const addNewProgram = newProgram => {
        dispatch({ type: ADD_PROGRAM, payload: newProgram });
    }

    return (
        <CreateProgramContext.Provider
        value={{
            newPrograms: state.newPrograms,
            addNewProgram
        }}>
            {props.children}
        </CreateProgramContext.Provider>
    )
}

export default CreateProgramState;