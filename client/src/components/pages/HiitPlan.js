import React, { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HiitWeekPlan from '../items/HiitWeekPlan';
import AuthContext from '../../context/auth/authContext';
import WorkoutContext from '../../context/workout/workoutContext';

const HiitPlan = () => {
    const location = useLocation();
    const { individualProgram } = location.state;
    const authContext = useContext(AuthContext);
    const workoutContext = useContext(WorkoutContext);

    useEffect(() => {
        authContext.loadUser();
        workoutContext.getWorkouts();
        // eslint-disable-next-line
    }, []);

    const { weeks } = individualProgram;
    

    return (
        <div className="wholeplancontainer">
            <div className="buttoncontainer">
                <Link className="workoutbutton" to='/programs'>Back to programs</Link>
            </div>
            
            {weeks.length > 0 && weeks.map((week, index) => (
                <HiitWeekPlan key={index} week={week} weekNum={index + 1}/>
                
            ))}
            
        </div>
    )
}

export default HiitPlan