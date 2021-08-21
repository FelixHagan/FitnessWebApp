import React, { useReducer } from 'react';
import ForumContext from './forumContext';
import forumReducer from './forumReducer';
import uuid from 'uuid';
import {
    ADD_MESSAGE,
    ADD_TOPIC
} from '../types';

const ForumState = props => {
    const initialState = {
        topics: [
            {
                id: 1,
                user: "Bob",
                description: "The first topic of the message board",
                date: new Date(2017, 10, 2),
                messages: [
                    {
                        id: 3,
                        user: "Bob",
                        message: "the first message",
                        date: new Date(2018, 11, 24)
                    },
                    {
                        id: 4,
                        user: "John",
                        message: "the second message",
                        date: new Date(2019, 1, 22)
                    },
                    {
                        id: 5,
                        user: "Mary",
                        message: "the third message",
                        date: new Date(2020, 2, 10)
                    }
                ]
            },
            {
                id: 2,
                user: "Mary",
                description: "The second topic of the message board",
                date: new Date(2016, 9, 14),
                messages: [
                    {
                        id: 3,
                        user: "Bob",
                        message: "the first message of second topic",
                        date: new Date(2018, 11, 24)
                    },
                    {
                        id: 4,
                        user: "John",
                        message: "the second message of second topic",
                        date: new Date(2019, 1, 22)
                    },
                    {
                        id: 5,
                        user: "Mary",
                        message: "the third message of third topic",
                        date: new Date(2020, 2, 10)
                    }
                ]
            }
        ]
        
    }

    const [state, dispatch] = useReducer(forumReducer, initialState);

    // add a message 
    const addMessage = updateTopic => {
        dispatch({ type: ADD_MESSAGE, payload: updateTopic });
    }

    // add a topic 
    const addTopic = newTopic => {
        dispatch({ type: ADD_TOPIC, payload: newTopic });
    }



    return (
        <ForumContext.Provider
        value={{
            topics: state.topics,
            addMessage,
            addTopic
        }}>
            {props.children}
        </ForumContext.Provider>
    )
}

export default ForumState;
