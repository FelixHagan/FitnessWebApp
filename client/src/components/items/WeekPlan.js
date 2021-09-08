import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const WeekPlan = ({ week, weekNum }) => {
    const authContext = useContext(AuthContext);
    const { loadUser, updateWorkoutsCompleted, user } = authContext;

    const [showForm, setShowForm] = useState(false);

    const [markCompleted, setMarkCompleted] = useState({
        name: "",
        description: ""
    });

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

    useEffect(() => {
        if (markCompleted.name !== "") {
            updateTheWorkouts({
                name: markCompleted.name,
                description: markCompleted.description
            });
        }

        const timer = setTimeout(() => {
            setMarkCompleted({
                name: "",
                description: ""
            });
        }, 3000);
        return () => clearTimeout(timer);
    }, [markCompleted]);

    useEffect(() => {
        if (completedWorkouts.workoutsCompleted.length !==  user.workoutsCompleted.length)
        updateWorkoutsCompleted(completedWorkouts, user._id);
    }, [completedWorkouts]);

    const handleClick = (name, description) => {
        setMarkCompleted({
            name: name,
            description: description
        });
    }

    const { run1, run2, run3 } = week;
    
    console.log(weekNum);
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

export default WeekPlan
