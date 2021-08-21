import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const Navbar = ({ title }) => {
    const [displayMobile, setDisplayMoblie] = useState(true);


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