import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import WeekPlan from '../items/WeekPlan';

const Plan = () => {
    const location = useLocation();
    const { individualProgram } = location.state;

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
