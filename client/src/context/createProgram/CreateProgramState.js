import React, { useReducer } from 'react';
import CreateProgramContext from './createProgramContext';
import createProgramReducer from './createProgramReducer';
import axios from 'axios';
import {
    ADD_PROGRAM,
    DELETE_PROGRAM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROGRAM,
    GET_PROGRAM,
    CLEAR_PROGRAM,
    PROGRAM_ERROR
} from '../types';

const CreateProgramState = props => {
    const initialState = {
        newPrograms: [],
        current: null,
        error: null
    }

    const [state, dispatch] = useReducer(createProgramReducer, initialState);

    // get program
    const getProgram = async () => {
        
        try {
            const res = await axios.get('/api/coach');

            dispatch({
                type: GET_PROGRAM,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: PROGRAM_ERROR,
                payload: err.response.msg
            })
        }
    }

    // add a program 
    const addNewProgram = async newProgram => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/coach', newProgram, config);

            dispatch({ type: ADD_PROGRAM, payload: res.data });
        } catch (err) {
            dispatch({
                type: PROGRAM_ERROR,
                payload: err.response.msg
            })
        }
        
    }

    // delete program
    const deleteProgram = async id => {
        try {
            await axios.delete(`/api/coach/${id}`)

            dispatch({ type: DELETE_PROGRAM, payload: id });
        } catch (err) {
            dispatch({
                type: PROGRAM_ERROR,
                payload: err.response.msg
            })
        }
        
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
    const updateProgram = async newProgram => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/coach/${newProgram._id}`, newProgram, config);

            dispatch({ type: UPDATE_PROGRAM, payload: res.data });
        } catch (err) {
            dispatch({
                type: PROGRAM_ERROR,
                payload: err.response.msg
            })
        }
        
    }

    // Clear Programs
    const clearPrograms = () => {
        dispatch({ type: CLEAR_PROGRAM });
    }

    return (
        <CreateProgramContext.Provider
        value={{
            newPrograms: state.newPrograms,
            current: state.current,
            error: state.error,
            addNewProgram,
            deleteProgram,
            setCurrent,
            clearCurrent,
            updateProgram,
            getProgram,
            clearPrograms
        }}>
            {props.children}
        </CreateProgramContext.Provider>
    )
}

export default CreateProgramState;