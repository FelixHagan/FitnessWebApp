import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkoutItem = ({ workout }) => {
    const { name, fitnessLevel, description } = workout;

    return (
        <div className='innerboxes'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>This workout has a difficulty of {fitnessLevel}</p>
            <Link className="workoutbutton" to={{
                pathname: '/timer',
                state: {
                    workout: workout
                }
            }}>Start Workout</Link>
        </div>
    )
}

WorkoutItem.propTypes = {
    workout: PropTypes.object.isRequired
}

export default WorkoutItem
