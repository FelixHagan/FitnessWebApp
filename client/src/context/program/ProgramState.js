import React, { useReducer } from 'react';
import ProgramContext from './programContext';
import programReducer from './programReducer';

import {
    
} from '../types';

const ProgramState = props => {
    const initialState = {
        programs: [
            {
                id: "1",
                name: "Couch to 5K",
                description: "This is a running program designed to get people into running. It consists of three runs a week and lasts for nine weeks, with the workouts progressing each week.",
                weeks: 
                [
                    {
                        run1: {
                            name: "Week 1 Run 1",
                            description: "you will begin with a brisk 5-minute walk. After this, you will alternate 1 minute of running and 1-and-a-half minutes of walking, for a total of 20 minutes."
                        },
                        run2: {
                            name: "Week 1 Run 2",
                            description: "you will begin with a brisk 5-minute walk. After this, you will alternate 1 minute of running and 1-and-a-half minutes of walking, for a total of 20 minutes."
                        },
                        run3: {
                            name: "Week 1 Run 3",
                            description: "you will begin with a brisk 5-minute walk. After this, you will alternate 1 minute of running and 1-and-a-half minutes of walking, for a total of 20 minutes."
                        }
                    },
                    {
                        run1: {
                            name: "Week 2 Run 1",
                            description: "you will begin with a brisk 5-minute walk. After this, you will alternate 1-and-a-half minutes of running with 2 minutes of walking, for a total of 20 minutes."
                        },
                        run2: {
                            name: "Week 2 Run 2",
                            description: "you will begin with a brisk 5-minute walk. After this, you will alternate 1-and-a-half minutes of running with 2 minutes of walking, for a total of 20 minutes."
                        },
                        run3: {
                            name: "Week 2 Run 3",
                            description: "you will begin with a brisk 5-minute walk. After this, you will alternate 1-and-a-half minutes of running with 2 minutes of walking, for a total of 20 minutes."
                        }
                    },
                    {
                        run1: {
                            name: "Week 3 Run 1",
                            description: "you will begin with a brisk 5-minute walk, then 2 repetitions of 1-and-a-half minutes of running, 1-and-a-half minutes of walking, 3 minutes of running and 3 minutes of walking."
                        },
                        run2: {
                            name: "Week 3 Run 2",
                            description: "you will begin with a brisk 5-minute walk, then 2 repetitions of 1-and-a-half minutes of running, 1-and-a-half minutes of walking, 3 minutes of running and 3 minutes of walking."
                        },
                        run3: {
                            name: "Week 3 Run 3",
                            description: "you will begin with a brisk 5-minute walk, then 2 repetitions of 1-and-a-half minutes of running, 1-and-a-half minutes of walking, 3 minutes of running and 3 minutes of walking."
                        }
                    }
                ]
            }, 
               
        ]
    }

    const [state, dispatch] = useReducer(programReducer, initialState);

    // add a program

    // add a topic 

    return (
        <ProgramContext.Provider
        value={{
            programs: state.programs
        }}>
            {props.children}
        </ProgramContext.Provider>
    )
}

export default ProgramState;
