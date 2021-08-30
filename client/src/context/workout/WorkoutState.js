import React, { useReducer } from 'react';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {
    GET_WORKOUTS,
    CLEAR_WORKOUTS,
    WORKOUTS_ERROR
} from '../types';
import axios from 'axios';

const WorkoutState = props => {
    const initialState = {
        workouts: [],
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(workoutReducer, initialState);

    // Get the workouts
    const getWorkouts = async () => {
        try {
            const res = await axios.get('/api/workouts');

            dispatch({
                type: GET_WORKOUTS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: WORKOUTS_ERROR,
                payload: err.response.msg
            })
        }
    }

    // clear the workouts
    const clearWorkouts = () => {
        dispatch({
            type: CLEAR_WORKOUTS
        })
    }

    // Filter Workouts

    return (
        <WorkoutContext.Provider
        value={{
            workouts: state.workouts,
            getWorkouts,
            clearWorkouts
        }}>
            {props.children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutState;