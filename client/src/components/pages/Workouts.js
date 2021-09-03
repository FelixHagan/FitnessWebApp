import React, { useContext, useEffect } from 'react';
import WorkoutItem from '../items/WorkoutItem';
import WorkoutContext from '../../context/workout/workoutContext';
import AuthContext from '../../context/auth/authContext';
import WorkoutFilterItem from '../items/WorkoutFilterItem';

const Workouts = () => {
    const workoutContext = useContext(WorkoutContext);
    const authContext = useContext(AuthContext);

    const { workouts, getWorkouts, loading, filtered } = workoutContext;

    useEffect(() => {
        authContext.loadUser();
        getWorkouts();
        // eslint-disable-next-line
    }, []);

    return (
        <>
        {loading ? (<h2>Loading</h2>) : (<> 
            <div className="workoutscontainer">
                <WorkoutFilterItem />
            </div>

            {filtered !== null ? 
            <div className="workoutscontainer">
                {filtered.map(workout => (
                    <WorkoutItem key={workout._id} workout={workout} />
                ))}
            </div> : 
            <div className="workoutscontainer">
                {workouts.map(workout => (
                    <WorkoutItem key={workout._id} workout={workout} />
                ))}
            </div>}
            
            
            
        </>)}
        </>
    )
}

export default Workouts
