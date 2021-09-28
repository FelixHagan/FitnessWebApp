import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import YoutubeItem from './YoutubeItem';

const TimerItem = () => {
    const location = useLocation();
    const { workout } = location.state;
    const authContext = useContext(AuthContext);

    const { loadUser, updateWorkoutsCompleted, user } = authContext;

    // runs on mount
    useEffect(() => {
        loadUser();
        updateTheWorkouts({
            name: workout.name,
            description: workout.description
        });
        // eslint-disable-next-line
    }, []);

    // defaults the completedWorkouts state to the workouts that have been completed by the user
    const [completedWorkouts, setCompletedWorkouts] = useState({
        workoutsCompleted: user.workoutsCompleted
    });

    const { workoutsCompleted } = completedWorkouts;

    // adds another workout to the completedWorkouts state
    const updateTheWorkouts = (workout) => {
        setCompletedWorkouts({
            ...completedWorkouts,
            workoutsCompleted: [...workoutsCompleted, workout] 
        });
    }

    // state to hold what current exercise the user is on in the workout
    const [currentWorkoutOn, setCurrentWorkoutOn] = useState(0);

    // two arrays to hold the names and urls of the exercises in the workout
    let exercisesNames = [];
    let exerciseVideoUrl = [];
    workout.exercises.map((exercise) => {
        exercisesNames.push(exercise.name);
        exerciseVideoUrl.push(exercise.videoUrl);
    })
    console.log(exercisesNames.length);
    // timmer - runs after currentWorkoutOn changes
    useEffect(() => {
        let timer;
        if (currentWorkoutOn < (exercisesNames.length)){
            timer = setTimeout(() => {
            setCurrentWorkoutOn(currentWorkoutOn + 1);

            }, 10000)
            
        } else if (currentWorkoutOn === exercisesNames.length) {
            updateWorkoutsCompleted(completedWorkouts, user._id);
        }

       return () => {
                clearTimeout(timer);
            }
    }, [currentWorkoutOn]);

    return (
        <div className="workoutscontainer">
            {currentWorkoutOn < exercisesNames.length ? (<div className="workoutbox">
                <h1>{workout.name} Workout</h1>
                <YoutubeItem exerciseVideoUrl={exerciseVideoUrl[currentWorkoutOn]}/>
                <h2>10 seconds of {exercisesNames[currentWorkoutOn]}</h2>
                <Link className="workoutbutton" to='/workouts'>Cancel</Link>
            </div>) : (<div className="workoutbox"><h1>Workout finished</h1>
            <Link className="workoutbutton" to='/workouts'>Back to workouts</Link></div>)}
        </div>
    )
}

export default TimerItem