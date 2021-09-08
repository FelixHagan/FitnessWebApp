import React, { useState, useContext, useEffect } from 'react';
import NewProgramForum from './NewProgramForum';
import CreateProgramContext from '../../context/createProgram/createProgramContext';
import AuthContext from '../../context/auth/authContext';

const NewProgramWeek = ({ newProgram }) => {
    const createProgramContext = useContext(CreateProgramContext);
    const authContext = useContext(AuthContext);

    const { current, setCurrent, clearCurrent, deleteProgram } = createProgramContext;
    const { loadUser, updateWorkoutsCompleted, user } = authContext;

    const { programName, mondayName, mondayDescription, tuesdayName, tuesdayDescription, wednesdayName, wednesdayDescription,
        thursdayName, thursdayDescription, fridayName, fridayDescription, saturdayName, saturdayDescription, 
        sundayName, sundayDescription, _id } = newProgram;

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

    
    const handleUpdate = () => {
        if (current) {
            clearCurrent();
        } else {
            setCurrent(newProgram);
        }
        setShowForm(!showForm);
    }

    const handleDelete = () => {
        deleteProgram(_id);
        clearCurrent();
    }

    const handleClick = (name, description) => {
        setMarkCompleted({
            name: name,
            description: description
        });
    }

    return (
        <>
            <div className="buttoncontainer">
                <p>{programName}</p>
            </div>
            <div>
            <div className="allweekscontainer">
            
            <div className="weekcontainer">
            <div className="daytitle">
                <p>Monday</p>
            </div>
            
            <div className="day">
                <h3>{mondayName}</h3>
                <p>{mondayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === mondayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(mondayName, mondayDescription)}>
                    Mark workout completed and add to history
                </button>)}
                
            </div>

            <div className="daytitle">
                <p>Tuesday</p>
            </div>
            <div className="day">
                <h3>{tuesdayName}</h3>
                <p>{tuesdayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === tuesdayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(tuesdayName, tuesdayDescription)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Wednesday</p>
            </div>
            <div className="day">
                <h3>{wednesdayName}</h3>
                <p>{wednesdayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === wednesdayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(wednesdayName, wednesdayDescription)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Thursday</p>
            </div>
            <div className="day">
                <h3>{thursdayName}</h3>
                <p>{thursdayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === thursdayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(thursdayName, thursdayDescription)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Friday</p>
            </div>
            <div className="day">
                <h3>{fridayName}</h3>
                <p>{fridayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === fridayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(fridayName, fridayDescription)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Saturday</p>
            </div>
            <div className="day">
                <h3>{saturdayName}</h3>
                <p>{saturdayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === saturdayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(saturdayName, saturdayDescription)}>
                    Mark workout completed and add to history
                </button>)}
            </div>

            <div className="daytitle">
                <p>Sunday</p>
            </div>
            <div className="day">
                <h3>{sundayName}</h3>
                <p>{sundayDescription}</p>
                {markCompleted.name !== "" && markCompleted.name === sundayName ? (<p>The workout has been added to your history of completed workouts.</p>)
                : (<button className="workoutbutton" onClick={() => handleClick(sundayName, sundayDescription)}>
                    Mark workout completed and add to history
                </button>)}
            </div>
            {showForm ? <div className="programsbox"><NewProgramForum /><button className="workoutbutton" onClick={handleUpdate}>Cancel</button></div> : 
            <div><button className="workoutbutton" onClick={handleUpdate}>Update</button>
            <button className="workoutbutton" onClick={handleDelete}>Delete</button></div>}
            
            
        </div>
        </div>
        </div>
        </>
    
        
    )
}

export default NewProgramWeek
