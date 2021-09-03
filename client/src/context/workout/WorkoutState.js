import React, { useReducer } from 'react';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {
    GET_WORKOUTS,
    CLEAR_WORKOUTS,
    WORKOUTS_ERROR,
    FILTER_WORKOUTS,
    CLEAR_FILTER
} from '../types';
import axios from 'axios';

const WorkoutState = props => {
    const initialState = {
        workouts: [],
        loading: true,
        error: null,
        filtered: null
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

    return (
        <WorkoutContext.Provider
        value={{
            workouts: state.workouts,
            loading: state.loading,
            error: state.error,
            filtered: state.filtered,
            getWorkouts,
            clearWorkouts,
            filterWorkouts,
            clearFilter
        }}>
            {props.children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutState;