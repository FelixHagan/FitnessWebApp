import React, { useState, useContext } from 'react';
import NewProgramForum from './NewProgramForum';
import CreateProgramContext from '../../context/createProgram/createProgramContext';

const NewProgramWeek = ({ newProgram }) => {
    const createProgramContext = useContext(CreateProgramContext)

    const { current, setCurrent, clearCurrent, deleteProgram } = createProgramContext;

    const { programName, mondayName, mondayDescription, tuesdayName, tuesdayDescription, wednesdayName, wednesdayDescription,
        thursdayName, thursdayDescription, fridayName, fridayDescription, saturdayName, saturdayDescription, 
        sundayName, sundayDescription, _id } = newProgram;

    const [showForm, setShowForm] = useState(false);

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
            </div>

            <div className="daytitle">
                <p>Tuesday</p>
            </div>
            <div className="day">
                <h3>{tuesdayName}</h3>
                <p>{tuesdayDescription}</p>
            </div>

            <div className="daytitle">
                <p>Wednesday</p>
            </div>
            <div className="day">
                <h3>{wednesdayName}</h3>
                <p>{wednesdayDescription}</p>
            </div>

            <div className="daytitle">
                <p>Thursday</p>
            </div>
            <div className="day">
                <h3>{thursdayName}</h3>
                <p>{thursdayDescription}</p>
            </div>

            <div className="daytitle">
                <p>Friday</p>
            </div>
            <div className="day">
                <h3>{fridayName}</h3>
                <p>{fridayDescription}</p>
            </div>

            <div className="daytitle">
                <p>Saturday</p>
            </div>
            <div className="day">
                <h3>{saturdayName}</h3>
                <p>{saturdayDescription}</p>
            </div>

            <div className="daytitle">
                <p>Sunday</p>
            </div>
            <div className="day">
                <h3>{sundayName}</h3>
                <p>{sundayDescription}</p>
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
