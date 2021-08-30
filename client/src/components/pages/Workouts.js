import React, { useContext, useEffect } from 'react';
import WorkoutItem from '../items/WorkoutItem';
import WorkoutContext from '../../context/workout/workoutContext'
import TimerItem from '../items/TimerItem';
import AuthContext from '../../context/auth/authContext';

const Workouts = () => {
    const workoutContext = useContext(WorkoutContext);
    const authContext = useContext(AuthContext);

    const { workouts, getWorkouts, loading } = workoutContext;

    useEffect(() => {
        authContext.loadUser();
        getWorkouts();
        // eslint-disable-next-line
    }, []);

    return (
        <>
        {loading ? (<h2>Loading</h2>) : (<div className="workoutscontainer">
            {workouts.map(workout => (
                <WorkoutItem key={workout._id} workout={workout} />
            ))}
        </div>)}
        </>
    )
}

export default Workouts
