import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import hiitprogramimage from '../../images/hiitprogram.jpeg'

const HiitProgramItem = ({ individualProgram }) => {
    const { name, description } = individualProgram;



    return (
        <div className="programsbox" >
            
            <h2>{name}</h2>
            <div className="homesectionboxes"><img src={hiitprogramimage} alt={"hiitprogramimage"} className="homeimg"></img></div>
            <p>{description}</p>
            <Link className="workoutbutton" to={{
                pathname: '/hiitPlan',
                state: {
                    individualProgram: individualProgram
                }
            }}>View Program</Link>
        </div>
    )
}

HiitProgramItem.propTypes = {
    individualProgram: PropTypes.object.isRequired
};

export default HiitProgramItem