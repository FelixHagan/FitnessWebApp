import React, { useReducer } from 'react';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {
    GET_WORKOUTS,
    CLEAR_WORKOUTS,
    WORKOUTS_ERROR,
    FILTER_WORKOUTS,
    CLEAR_FILTER,
    FIND_SPECIFIC,
    CLEAR_SPECIFIC
} from '../types';
import axios from 'axios';

const WorkoutState = props => {
    const initialState = {
        workouts: [],
        loading: true,
        error: null,
        filtered: null,
        specificWorkout: null
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
    const filterWorkouts = text => {
        dispatch({ type: FILTER_WORKOUTS, payload: text});
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    // Find specific workout 
    const findSpecific = (name) => {
        dispatch({ type: FIND_SPECIFIC, payload: name});
    }

    // Clear Specific
    const clearSpecific = () => {
        dispatch({ type: CLEAR_SPECIFIC });
    }

    return (
        <WorkoutContext.Provider
        value={{
            workouts: state.workouts,
            loading: state.loading,
            error: state.error,
            filtered: state.filtered,
            specificWorkout: state.specificWorkout,
            getWorkouts,
            clearWorkouts,
            filterWorkouts,
            clearFilter,
            findSpecific,
            clearSpecific
        }}>
            {props.children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutState;