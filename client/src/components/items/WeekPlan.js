import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import PropTypes from 'prop-types';

const WeekPlan = ({ week, weekNum }) => {
    const authContext = useContext(AuthContext);
    const { updateWorkoutsCompleted, user } = authContext;

    // state to hold the workout that has been marked completed
    const [markCompleted, setMarkCompleted] = useState({
        name: "",
        description: ""
    });

    // state to hold the completed workouts which is initially set the previous workouts
    // that have been completed by the user
    const [completedWorkouts, setCompletedWorkouts] = useState({
        workoutsCompleted: user.workoutsCompleted
    });

    const { workoutsCompleted } = completedWorkouts;

    // adds a workout to the completedWorkouts
    const updateTheWorkouts = (workout) => {
        setCompletedWorkouts({
            ...completedWorkouts,
            workoutsCompleted: [...workoutsCompleted, workout] 
        });
    }

    // runs when completed workouts is changed
    useEffect(() => {
        if (markCompleted.name !== "") {
            updateTheWorkouts({
                name: markCompleted.name,
                description: markCompleted.description
            });
        }
        // sets markCompleted back to the default state after 3 seconds
        const timer = setTimeout(() => {
            setMarkCompleted({
                name: "",
                description: ""
            });
        }, 3000);
        return () => clearTimeout(timer);
    }, [markCompleted]);

    // runs after completedWorkouts has been changed 
    useEffect(() => {
        // checks if a workout has been added to the completedWorkouts state
        if (completedWorkouts.workoutsCompleted.length !==  user.workoutsCompleted.length)
        updateWorkoutsCompleted(completedWorkouts, user._id);
    }, [completedWorkouts]);

    // runs when user clicks Mark workout completed and add to history
    const handleClick = (name, description) => {
        setMarkCompleted({
            name: name,
            description: description
        });
    }

    const { run1, run2, run3 } = week;
    
    
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
                <p>{run2.description}</p>
                {markCompleted.name !== "" && markCompleted.name === run1.name ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(run1.name, run1.description)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Tuesday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>

            <div className="daytitle">
                <p>Wednesday</p>
            </div>
            <div className="day">
                <h3>{run2.name}</h3>
                <p>{run2.description}</p>
                {markCompleted.name !== "" && markCompleted.name === run2.name ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(run2.name, run2.description)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Thursday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>

            <div className="daytitle">
                <p>Friday</p>
            </div>
            <div className="day">
                <h3>{run3.name}</h3>
                <p>{run3.description}</p>
                {markCompleted.name !== "" && markCompleted.name === run3.name ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(run3.name, run3.description)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Saturday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>

            <div className="daytitle">
                <p>Sunday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>
        </div>
        </div>
        </>
    )
}

WeekPlan.propTypes = {
    week: PropTypes.object,
    weekNum: PropTypes.number
}

export default WeekPlan
