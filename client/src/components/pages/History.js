import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Day from '../items/Day';


const History = () => {
    const authContext = useContext(AuthContext);

    const { loadUser, user } = authContext;


    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);


    return (
        <div className="wholeplancontainer">
            {user && user.workoutsCompleted.length > 0 && user.workoutsCompleted.map((workoutCompleted) => (
                <Day key={workoutCompleted._id} workoutCompleted={workoutCompleted}/>
                
            ))}
        </div>
    )
}

export default History
