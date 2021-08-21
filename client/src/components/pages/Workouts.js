import React, { useContext } from 'react';
import WorkoutItem from '../items/WorkoutItem';
import WorkoutContext from '../../context/workout/workoutContext'
import TimerItem from '../items/TimerItem';

const Workouts = () => {
    const workoutContext = useContext(WorkoutContext);

    const { workouts } = workoutContext;

    return (
        
        <div className="workoutscontainer">
            {workouts.map(workout => (
                <WorkoutItem key={workout.id} workout={workout} />
            ))}
        </div>
    )
}

export default Workouts
