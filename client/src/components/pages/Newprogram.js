import React, { useContext } from 'react';
import CreateProgramContext from '../../context/createProgram/createProgramContext';
import NewProgramWeek from '../items/NewProgramWeek';
import { Link } from 'react-router-dom';

const NewProgram = () => {
    const createProgramContext = useContext(CreateProgramContext);

    const { newPrograms } = createProgramContext;

    
    return (
        <>
        {Object.keys(newPrograms).length >= 1 ? (<div className="wholeplancontainer">
            <div className="buttoncontainer">
                <Link to='/programs' className="workoutbutton">Back To Programs</Link>
            </div>
            
            {newPrograms.map(eachNewProgram => (
                <NewProgramWeek key={eachNewProgram.id} newProgram={eachNewProgram}/> 
            ))}
        </div>) : <div className="programsbox"><h2>You have no created programs yet</h2>
        <Link to='/programs' className="workoutbutton">Back To Programs</Link>
        </div>}
        
        </>
    )
}

export default NewProgram
