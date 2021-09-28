import React, { useState, useEffect, useContext } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import WorkoutContext from '../../context/workout/workoutContext';
import CreateProgramContext from '../../context/createProgram/createProgramContext'; 
import ForumContext from '../../context/forum/forumContext';
import AdminContext from '../../context/admin/adminContext';
import MessageCoachContext from '../../context/messageCoach/messageCoachContext';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const workoutContext = useContext(WorkoutContext);
    const createProgramContext = useContext(CreateProgramContext);
    const forumContext = useContext(ForumContext);
    const adminContext = useContext(AdminContext);
    const messageCoachContext = useContext(MessageCoachContext);

    // state to hold if the navbar should display on a small screen
    const [displayMobile, setDisplayMoblie] = useState(true);

    const { isAuthenticated, logout } = authContext;
    const { clearWorkouts } = workoutContext;
    const { clearPrograms } = createProgramContext;
    const { clearForum } = forumContext;
    const { clearUsers } = adminContext;
    const { clearMessages } = messageCoachContext;

    // this method is called when user clicks on the navbar 
    const handleClick = () => {
        setDisplayMoblie(!displayMobile);
        
    }

    // when a navigation is clicked, this code will cause the navbar to disappear again 
    // on a small screen
    const navClick = () => {
        if (displayMobile === false) {
            setDisplayMoblie(true);
        }
    }    

    useEffect(()=> {
        // checks if there is a user and the user is a normal type of user
        if (authContext.user && authContext.user.userType === "1") {
            const mobilediv = document.getElementById("mobileview");
        if (displayMobile){
            mobilediv.classList.add("nodisplay");
        } else {
            mobilediv.classList.remove("nodisplay");
        }
        
        } 
        
    })

    const logoutUser = () => {
        logout();
        clearWorkouts();
        clearPrograms();
        clearForum();
        clearUsers();
        clearMessages();
    }

    const loginRegister = (
        <div>
        <div className="reglog">
            <Link to='/register' onClick={navClick}>Register</Link>
        </div>
        <div className="reglog">
            <Link to='/login' onClick={navClick}>Login</Link>
        </div>
        </div>
    )

    return (
        <div >
            <div className="header">
                <div className="headercontainer">
                    <h2>
                        {title}
                    </h2>
                    
                        {authContext.user && <p>{authContext.user.name}</p>}

                        {!isAuthenticated ? loginRegister : <div>
                            <a onClick={logoutUser}>Logout</a>
                        </div>}
                    
                
                    
                    {authContext.user && authContext.user.userType === "1" &&
                        <p onClick={handleClick} className="burgermenu"><FaBars/></p>
                    }
                    
                </div>

                
            </div>
            {authContext.user && authContext.user.userType === "1" &&
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
                        <li>
                            <Link to='/messageCoach' onClick={navClick}>Msg Coach</Link>
                        </li>
                        <li>
                            <Link to='/history' onClick={navClick}>History</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            }
            
            
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