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

    const { loadUser, updateWorkoutsCompleted, user } = authContext;

    useEffect(() => {
        loadUser();
        updateTheWorkouts({
            name: workout.name,
            description: workout.description
        });
        // eslint-disable-next-line
    }, []);

    const [completedWorkouts, setCompletedWorkouts] = useState({
        workoutsCompleted: user.workoutsCompleted
    });

    const { workoutsCompleted } = completedWorkouts;

    const updateTheWorkouts = (workout) => {
        setCompletedWorkouts({
            ...completedWorkouts,
            workoutsCompleted: [...workoutsCompleted, workout] 
        });
    }

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

    console.log(workout);
    
    useEffect(() => {
        let timer;
        if (currentWorkoutOn < 10){
            timer = setTimeout(() => {
            setCurrentWorkoutOn(currentWorkoutOn + 1);

            }, 10000)
            
        } else if (currentWorkoutOn === 10) {
            updateWorkoutsCompleted(completedWorkouts, user._id);
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