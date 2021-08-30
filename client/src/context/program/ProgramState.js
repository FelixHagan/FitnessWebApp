import React, { useReducer } from 'react';
import ProgramContext from './programContext';
import programReducer from './programReducer';
import axios from 'axios';
import {
    GET_RUNNING,
    RUNNING_ERROR
} from '../types';

const ProgramState = props => {
    const initialState = {
        programs: [],
        errors: null,
        loading: true
    }

    const [state, dispatch] = useReducer(programReducer, initialState);

    // get running program
    const getRunning = async () => {
        try {
            const res = await axios.get('/api/running');

            dispatch({
                type: GET_RUNNING,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: RUNNING_ERROR,
                payload: err.response.msg
            })
        }
    }

    // add a topic 

    return (
        <ProgramContext.Provider
        value={{
            programs: state.programs,
            getRunning
        }}>
            {props.children}
        </ProgramContext.Provider>
    )
}

export default ProgramState;
