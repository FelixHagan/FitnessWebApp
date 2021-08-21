import React from 'react';

const WeekPlan = ({ week, weekNum }) => {

    const { run1, run2, run3 } = week;
    
    console.log(weekNum);
    return (
        <>

        <div className="buttoncontainer">
            <p>Week {weekNum}</p>
        </div>
        <div className="allweekscontainer">
            
            <div className="weekcontainer">
            <div className="daytitle">
                <p>Monday</p>
            </div>
            
            <div className="day">
                <h3>{run1.name}</h3>
                <p>{run2.description}</p>
            </div>

            <div className="daytitle">
                <p>Tuesday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>

            <div className="daytitle">
                <p>Wednesday</p>
            </div>
            <div className="day">
                <h3>{run2.name}</h3>
                <p>{run2.description}</p>
            </div>

            <div className="daytitle">
                <p>Thursday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>

            <div className="daytitle">
                <p>Friday</p>
            </div>
            <div className="day">
                <h3>{run3.name}</h3>
                <p>{run3.description}</p>
            </div>

            <div className="daytitle">
                <p>Saturday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>

            <div className="daytitle">
                <p>Sunday</p>
            </div>
            <div className="day">
                <h3>Rest Day</h3>
                <p>Take it easy today. You can if you want go a short easy walk or try a bit of stretching 
                    but there will be no intensity today.
                </p>
            </div>
        </div>
        </div>
        </>
    )
}

export default WeekPlan
