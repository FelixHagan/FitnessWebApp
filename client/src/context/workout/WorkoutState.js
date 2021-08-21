import React, { useReducer } from 'react';
import uuid from 'uuid';
import WorkoutContext from './workoutContext';
import workoutReducer from './workoutReducer';
import {

} from '../types';

const WorkoutState = props => {
    const initialState = {
        workouts: [
            {
                id: "1",
                name: "Full Body HIIT Session",
                fitnessLevel: "3",
                description: "This workout is a full body workout that will work all the muscles. It has a number of high intensity intervals that will get the heart rate racing",
                startWorkout: false,
                exercises: [
                    {
                        name: "jumping jacks",
                        videoUrl: "https://www.youtube.com/embed/tinikmHlSKQ?playlist=tinikmHlSKQ&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "forward jumping jacks",
                        videoUrl: "https://www.youtube.com/embed/xa-nUFeqbJY?playlist=xa-nUFeqbJY&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "squats",
                        videoUrl: "https://www.youtube.com/embed/8VxjNGHWso8?playlist=8VxjNGHWso8&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "high knees",
                        videoUrl: "https://www.youtube.com/embed/DV5pongX9y8?playlist=DV5pongX9y8&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "half press-ups",
                        videoUrl: "https://www.youtube.com/embed/-rZp5W_3ZHQ?playlist=-rZp5W_3ZHQ&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "plank",
                        videoUrl: "https://www.youtube.com/embed/7qHiLHw2gE8?playlist=7qHiLHw2gE8&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "side plank left",
                        videoUrl: "https://www.youtube.com/embed/z1VXzmaww-8?playlist=z1VXzmaww-8&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "side plank right",
                        videoUrl: "https://www.youtube.com/embed/OTjkSnnN4Xs?playlist=OTjkSnnN4Xs&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "bicycle crunches",
                        videoUrl: "https://www.youtube.com/embed/3ieMks7b868?playlist=3ieMks7b868&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/kFS8qWhweVI?playlist=kFS8qWhweVI&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "crunches",
                        videoUrl: "https://www.youtube.com/embed/abgWO3WFFYY?playlist=abgWO3WFFYY&autoplay=1&mute=1&loop=1&controls=0"
                    }
                ]
            },
            {
                id: "2",
                name: "Leg Specific Session",
                fitnessLevel: "4",
                description: "This workout focuses mainly on the legs. It has a number of high intensity intervals that will get the heart rate racing",
                startWorkout: false,
                exercises: [
                    {
                        name: "heel kicks",
                        videoUrl: "https://www.youtube.com/embed/MwuzsvbTr34?playlist=MwuzsvbTr34&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "leg raises",
                        videoUrl: "https://www.youtube.com/embed/qb48nHDFoUM?playlist=qb48nHDFoUM&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "squats",
                        videoUrl: "https://www.youtube.com/embed/oSd29AJeE24?playlist=oSd29AJeE24&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "jumping jacks",
                        videoUrl: "https://www.youtube.com/embed/5DnFiAFGJlA?playlist=5DnFiAFGJlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "knees to chest",
                        videoUrl: "https://www.youtube.com/embed/UnBL-5a2Sxg?playlist=UnBL-5a2Sxg&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "seated to standing",
                        videoUrl: "https://www.youtube.com/embed/5DnFiAFGJlA?playlist=5DnFiAFGJlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "lunges",
                        videoUrl: "https://www.youtube.com/embed/dYJ5EiFnvtc?playlist=dYJ5EiFnvtc&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "squat jumps",
                        videoUrl: "https://www.youtube.com/embed/ZhX19X6UkJ4?playlist=ZhX19X6UkJ4&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "high knees",
                        videoUrl: "https://www.youtube.com/embed/m0lGmtkjaA4?playlist=m0lGmtkjaA4&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "rest",
                        videoUrl: "https://www.youtube.com/embed/QFIJ-kwcXlA?playlist=QFIJ-kwcXlA&autoplay=1&mute=1&loop=1&controls=0"
                    },
                    {
                        name: "pulsing squats",
                        videoUrl: "https://www.youtube.com/embed/zembWX4ng_8?playlist=zembWX4ng_8&autoplay=1&mute=1&loop=1&controls=0"
                    }
                ]
            }
            
        ]
    }

    const [state, dispatch] = useReducer(workoutReducer, initialState);

    // Get the workouts

    // Filter Workouts

    return (
        <WorkoutContext.Provider
        value={{
            workouts: state.workouts
        }}>
            {props.children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutState;