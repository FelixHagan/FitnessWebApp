import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkoutContext from '../../context/workout/workoutContext';
import AuthContext from '../../context/auth/authContext';

const HiitWeekPlan = ({ week, weekNum }) => {
    const workoutContext = useContext(WorkoutContext);

    const { run1, run2, run3 } = week;

    const { findSpecific, clearSpecific, specificWorkout, workouts } = workoutContext;

   
    const [theWorkouts, setTheWorkouts] = useState({
        workout: null
    });

    const [markWorkout, setmarkWorkout] = useState("");

    const { workout } = theWorkouts;

    useEffect(() => {
        //{run1 !== null && findSpecific(run1.name)}
        setTheWorkouts({
            ...theWorkouts,
            workout: specificWorkout
        });

    }, [specificWorkout])

    

    // console.log(weekNum);

    const handleClick = (run, name) => {
        findSpecific(name);
        setmarkWorkout(run);
    }

    /*
    <Link className="workoutbutton" to={{
                    pathname: '/timer',
                    state: {
                        workout: (workout1 !== null && workout1[0])
                }
            }}>Start Workout{workout1 !== null && console.log(workout1[0])}</Link>
    */

    return (
        <>

        <div className="buttoncontainer">
            <p>Week {weekNum}</p>
        </div>
        <div className="allweekscontainer">
            
            <div className="weekcontainer">
            <div className="daytitle">
                <p>Monday</p>
            </div>
            
            <div className="day">
                <h3>{run1.name}</h3>
                
                {markWorkout !== "workout1" ? (<button className="workoutbutton" onClick={() => handleClick("workout1", run1.name)}>View Description</button>) : 
                <>
                <p>{run2.description}</p>
                <Link className="workoutbutton" to={{
                    pathname: '/timer',
                    state: {
                        workout: (workout !== null && workout[0])
                }
                }}>Start Workout{workout !== null && console.log(workout[0])}</Link>
                </>
                }
            </div>

            <div className="daytitle">
                <p>Tuesday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                
            </div>

            <div className="daytitle">
                <p>Wednesday</p>
            </div>
            <div className="day">
                <h3>{run2.name}</h3>
                {markWorkout !== "workout2" ? (<button className="workoutbutton" onClick={() => handleClick("workout2", run2.name)}>View Description</button>) : 
                <>
                <p>{run2.description}</p>
                <Link className="workoutbutton" to={{
                    pathname: '/timer',
                    state: {
                        workout: (workout !== null && workout[0])
                }
                }}>Start Workout{workout !== null && console.log(workout[0])}</Link>
                </>
                }
            </div>

            <div className="daytitle">
                <p>Thursday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                
            </div>

            <div className="daytitle">
                <p>Friday</p>
            </div>
            <div className="day">
                <h3>{run3.name}</h3>
                
                {markWorkout !== "workout3" ? (<button className="workoutbutton" onClick={() => handleClick("workout3", run3.name)}>View Description</button>) : 
                <>
                <p>{run3.description}</p>
                <Link className="workoutbutton" to={{
                    pathname: '/timer',
                    state: {
                        workout: (workout !== null && workout[0])
                }
                }}>Start Workout{workout !== null && console.log(workout[0])}</Link>
                </>
                }
            </div>

            <div className="daytitle">
                <p>Saturday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                
            </div>

            <div className="daytitle">
                <p>Sunday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                
            </div>
        </div>
        </div>
        </>
    )
}

export default HiitWeekPlan
