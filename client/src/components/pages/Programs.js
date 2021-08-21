import React, { useContext, useState } from 'react';
import ProgramContext from '../../context/program/programContext';
import CreateProgramContext from '../../context/createProgram/createProgramContext';
import ProgramItem from '../items/ProgramItem';
import NewprogramForum from '../items/NewProgramForum';

const Programs = () => {
    const programContext = useContext(ProgramContext);
    const createProgramContext = useContext(CreateProgramContext);

    const { newPrograms } = createProgramContext;

    const { programs } = programContext;

    const [viewForm, setViewForm] = useState(false);

    const handleClick = () => {
        setViewForm(!viewForm);
    }

    console.log(Object.keys(newPrograms).length);

    return (
        <div className="">
            {programs.map(individualProgram => (
                <ProgramItem key={individualProgram.id} individualProgram={individualProgram}/>
            ))}
            
            <div className="programsbox">
                <h2>Create A Program</h2>
                <p>You can create your own program for the week by adding in the name of the 
                    workout and the description of the workout into the different days.</p>
                {viewForm && <NewprogramForum />}
                {viewForm ? <button className="workoutbutton" onClick={handleClick}>Cancel</button> : <button className="workoutbutton" onClick={handleClick}>Create Program</button>}
                
            </div>
        </div>
    )
}

export default Programs
