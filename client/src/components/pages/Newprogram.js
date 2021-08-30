import React, { useContext, useEffect, useState } from 'react';
import CreateProgramContext from '../../context/createProgram/createProgramContext';
import AuthContext from '../../context/auth/authContext';
import NewProgramWeek from '../items/NewProgramWeek';
import { Link } from 'react-router-dom';

const NewProgram = () => {
    const createProgramContext = useContext(CreateProgramContext);
    const authContext = useContext(AuthContext);

    const { newPrograms, getProgram, loading } = createProgramContext;
    const { loadUser } = authContext;
    
    useEffect(() => {
        loadUser();
        getProgram();
        // eslint-disable-next-line
    }, []);

    return (
        <>
        {!loading ? (Object.keys(newPrograms).length >= 1 ? (<div className="wholeplancontainer">
            <div className="buttoncontainer">
                <Link to='/programs' className="workoutbutton">Back To Programs</Link>
            </div>
            
            {newPrograms.map(eachNewProgram => (
                <NewProgramWeek key={eachNewProgram._id} newProgram={eachNewProgram}/> 
            ))}
        </div>) : <div className="programsbox"><h2>You have no created programs yet</h2>
        <Link to='/programs' className="workoutbutton">Back To Programs</Link>
        </div>) : <h3>Loading</h3>}
        
        
        </>
    )
}

export default NewProgram
