import React, { useContext, useState, useEffect } from 'react';
import ProgramContext from '../../context/program/programContext';
import CreateProgramContext from '../../context/createProgram/createProgramContext';
import AuthContext from '../../context/auth/authContext';
import WorkoutContext from '../../context/workout/workoutContext';
import ProgramItem from '../items/ProgramItem';
import HiitProgramItem from '../items/HiitProgramItem';
import NewprogramForum from '../items/NewProgramForum';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programContext = useContext(ProgramContext);
    const createProgramContext = useContext(CreateProgramContext);
    const authContext = useContext(AuthContext);
    const workoutContext = useContext(WorkoutContext);

    const { programs, getRunning } = programContext;
    const { getWorkouts } = workoutContext;

    // loads the user, gets the programs and gets the workouts
    useEffect(() => {
        authContext.loadUser();
        getRunning();
        getWorkouts();
        // eslint-disable-next-line
    }, []);

    const { newPrograms } = createProgramContext;

    

    const [viewForm, setViewForm] = useState(false);

    // cancels the form
    const cancelViewForm = () => {
        setViewForm(false);
    }

    const handleClick = () => {
        setViewForm(!viewForm);
    }

    return (
        <div className="">
            
            {programs && programs.map(individualProgram => (
                individualProgram.name === "Couch to 5K" &&
                <ProgramItem key={individualProgram._id} individualProgram={individualProgram}/>
            ))}

            {programs && programs.length > 1 && programs.map(individualProgram => (
                individualProgram.name !== "Couch to 5K" &&
                <HiitProgramItem key={individualProgram._id} individualProgram={individualProgram}/>
            ))}
            
            <div className="programsbox">
                <h2>Create A Program</h2>
                <p>You can create your own program for the week by adding in the name of the 
                    workout and the description of the workout into the different days.</p>
                {viewForm && <NewprogramForum cancelForm={cancelViewForm}/>}
                {viewForm ? <button className="workoutbutton" onClick={handleClick}>Cancel</button> : <button className="workoutbutton" onClick={handleClick}>Create Program</button>}
                
            </div>

            <div className="programsbox">
                <h2>View Your Created Programs</h2>
                <p>View the programs that you have created.
                </p>
                <Link to='/newProgram' className="workoutbutton">View Created Programs</Link>
            </div>
        </div>
    )
}

export default Programs
