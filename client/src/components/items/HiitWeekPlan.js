import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import WorkoutContext from '../../context/workout/workoutContext';

const HiitWeekPlan = ({ week, weekNum }) => {
    const workoutContext = useContext(WorkoutContext);

    const { run1, run2, run3 } = week;

    const { findSpecific, specificWorkout } = workoutContext;

   // state to hold the specific workout
    const [theWorkouts, setTheWorkouts] = useState({
        workout: null
    });

    const [markWorkout, setmarkWorkout] = useState("");

    const { workout } = theWorkouts;

    // runs when the specific workout changes which happens after user clicks view description
    useEffect(() => {
        setTheWorkouts({
            ...theWorkouts,
            workout: specificWorkout
        });

    }, [specificWorkout])

    // runs when user clicks view description
    const handleClick = (run, name) => {
        findSpecific(name);
        setmarkWorkout(run);
    }

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
                }}>Start Workout</Link>
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
                }}>Start Workout</Link>
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
                }}>Start Workout</Link>
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

HiitWeekPlan.propTypes = {
    week: PropTypes.object,
    weekNum: PropTypes.number
}

export default HiitWeekPlan
