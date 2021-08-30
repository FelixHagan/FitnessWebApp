import React, { useState, useEffect, useContext } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import WorkoutContext from '../../context/workout/workoutContext';
import CreateProgramContext from '../../context/createProgram/createProgramContext'; 
import ForumContext from '../../context/forum/forumContext';

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const workoutContext = useContext(WorkoutContext);
    const createProgramContext = useContext(CreateProgramContext);
    const forumContext = useContext(ForumContext);

    const [displayMobile, setDisplayMoblie] = useState(true);

    const { isAuthenticated, logout } = authContext;
    const { clearWorkouts } = workoutContext;
    const { clearPrograms } = createProgramContext;
    const { clearForum } = forumContext;

    const handleClick = () => {
        setDisplayMoblie(!displayMobile);
        
    }

    const navClick = () => {
        if (displayMobile === false) {
            setDisplayMoblie(true);
        }
    }    

    useEffect(()=> {
        const mobilediv = document.getElementById("mobileview");
        if (displayMobile){
            mobilediv.classList.add("nodisplay");
        } else {
            mobilediv.classList.remove("nodisplay");
        }
        
        console.log(displayMobile);
    })

    const logoutUser = () => {
        logout();
        clearWorkouts();
        clearPrograms();
        clearForum();
    }

    const loginRegister = (
        <>
        <li>
            <Link to='/register' onClick={navClick}>Register</Link>
        </li>
        <li>
            <Link to='/login' onClick={navClick}>Login</Link>
        </li>
        </>
    )

    return (
        <div >
            <div className="header">
                <div className="headercontainer">
                    <h2>
                        {title}
                    </h2>
                    
                    <p onClick={handleClick} className="burgermenu">burger menu</p>
                </div>

                
            </div>
            <div id="mobileview" className="navbar">
                <div className="outercontainer">
                    <ul>
                        <li>
                            <Link to='/' onClick={navClick}>Home</Link>
                        </li>
                        <li>
                            <Link to='/workouts' onClick={navClick}>Workouts</Link>
                        </li>
                        <li>
                            <Link to='/programs' onClick={navClick}>Programs</Link>
                        </li>
                        <li>
                            <Link to='/forum' onClick={navClick}>Forum</Link>
                        </li>
                        {!isAuthenticated ? loginRegister : <li>
                            <a onClick={logoutUser}>Logout</a>
                        </li>}
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}

Navbar.protoTypes = {
    title: Proptypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Training-App'
}

export default Navbar