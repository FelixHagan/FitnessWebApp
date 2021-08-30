import React, { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import WeekPlan from '../items/WeekPlan';
import AuthContext from '../../context/auth/authContext';

const Plan = () => {
    const location = useLocation();
    const { individualProgram } = location.state;
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    const { weeks } = individualProgram;

    return (
        <div className="wholeplancontainer">
            <div className="buttoncontainer">
                <Link className="workoutbutton" to='/programs'>Back to programs</Link>
            </div>
            
            {weeks.map((week, index) => (
                <WeekPlan key={index} week={week} weekNum={index + 1}/>

            ))}
            
        </div>
    )
}

export default Plan
