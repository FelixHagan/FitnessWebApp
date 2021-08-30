import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import WorkoutContext from '../../context/workout/workoutContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import YoutubeItem from './YoutubeItem';

const TimerItem = () => {
    const location = useLocation();
    const { workout } = location.state;
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    // const { id, name, fitnessLevel, description, startWorkout, 
    // currentExerciseOn, exercises } = workout;

    const workoutContext = useContext(WorkoutContext);

    const [currentWorkoutOn, setCurrentWorkoutOn] = useState(0);


    let exercisesNames = [];
    let exerciseVideoUrl = [];
    workout.exercises.map((exercise) => {
        exercisesNames.push(exercise.name);
        exerciseVideoUrl.push(exercise.videoUrl);
    })

    console.log(exercisesNames);
    console.log(exerciseVideoUrl);

    useEffect(() => {
        let timer;
        if (currentWorkoutOn < 10){
            timer = setTimeout(() => {
            setCurrentWorkoutOn(currentWorkoutOn + 1);

            }, 10000)
            
        }
       return () => {
                clearTimeout(timer);
            }
    }, [currentWorkoutOn]);

    console.log(currentWorkoutOn);

    return (
        <div className="workoutscontainer">
            {currentWorkoutOn < 10 ? (<div className="workoutbox">
                <h1>{workout.name} Workout</h1>
                <YoutubeItem exerciseVideoUrl={exerciseVideoUrl[currentWorkoutOn]}/>
                <h2>30 seconds of {exercisesNames[currentWorkoutOn]}</h2>
                <Link className="workoutbutton" to='/workouts'>Cancel</Link>
            </div>) : (<div className="workoutbox"><h1>Workout finished</h1>
            <Link className="workoutbutton" to='/workouts'>Back to workouts</Link></div>)}
        </div>
    )
}

export default TimerItem