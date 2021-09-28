import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

const Day = ({ workoutCompleted }) => {
    const { date, name, description } = workoutCompleted;

    // to make the date a more readable format
    const separateDate = (date) => {
        let year = date.split("T");
        return year[0];
    }

    return (
        <div className="allweekscontainer">
            <div className="weekcontainer">
            <div className="daytitle">
                <p>{separateDate(date)}</p>
            </div>

            <div className="day" style={{borderColor: "green"}}>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Completed! Well Done!!!</p>
                <p><FaCheckCircle style={{color: "green", fontSize: "1.5em"}}/></p>
            </div>
            </div>
        </div>
    )
}

Day.propTypes = {
    workoutCompleted: PropTypes.object.isRequired
}

export default Day
