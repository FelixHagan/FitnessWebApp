import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import couchto5kimage from '../../images/couchto5kimage.jpeg'

const ProgramItem = ({ individualProgram }) => {
    const { name, description } = individualProgram;



    return (
        <div className="programsbox" >
            
            <h2>{name}</h2>
            <div className="homesectionboxes"><img src={couchto5kimage} alt={"couchTo5KImage"} className="homeimg"></img></div>
            <p>{description}</p>
            <Link className="workoutbutton" to={{
                pathname: '/plan',
                state: {
                    individualProgram: individualProgram
                }
            }}>View Program</Link>
        </div>
    )
}

ProgramItem.propTypes = {
    individualProgram: PropTypes.object.isRequired
};

export default ProgramItem
