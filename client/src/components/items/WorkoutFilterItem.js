import React, { useContext, useRef, useEffect } from 'react';
import WorkoutContext from '../../context/workout/workoutContext';

const WorkoutFilterItem = () => {
    const workoutContext = useContext(WorkoutContext);
    const text = useRef('');

    const { filterWorkouts, clearFilter, filtered } = workoutContext;

    useEffect(() => {
       if(filtered === null) {
           text.current.value = '';
       }
    });

    const onChange = e => {
        if(text.current.value !== ''){
            filterWorkouts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form className="filterform">
            <input ref={text} type="text" onChange={onChange} placeholder="Search for workout by difficulty: enter 1-5"/>
        </form>
    )
}

export default WorkoutFilterItem;
