import React, { useReducer } from 'react';
import ForumContext from './forumContext';
import forumReducer from './forumReducer';
import axios from 'axios';
import {
    GET_FORUM,
    CLEAR_FORUM,
    FORUM_ERROR,
    ADD_MESSAGE,
    ADD_TOPIC
} from '../types';

const ForumState = props => {
    const initialState = {
        topics: [
            
        ],
        error: null
        
    }

    const [state, dispatch] = useReducer(forumReducer, initialState);

    // get messages
    const getMessages = async () => {
        try {
            const res = await axios.get('/api/forum');

            dispatch({
                type: GET_FORUM,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: FORUM_ERROR,
                payload: err.response.msg
            })
        }
    }

    // clear forum
    const clearForum = () => {
        dispatch({
            type: CLEAR_FORUM
        })
    }

    // add a message 
    const addMessage = async updateTopic => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/forum/${updateTopic.id}`, updateTopic, config);

            dispatch({ type: ADD_MESSAGE, payload: res.data });
        } catch (err) {
            dispatch({
                type: CLEAR_FORUM,
                payload: err.response.msg
            })
        }
        
    }

    // add a topic 
    const addTopic = async newTopic => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/forum/', newTopic, config);

            dispatch({ type: ADD_TOPIC, payload: res.data });
        } catch (err) {
            dispatch({
                type: CLEAR_FORUM,
                payload: err.response.msg
            })
        }
        
    }



    return (
        <ForumContext.Provider
        value={{
            topics: state.topics,
            error: state.error,
            addMessage,
            addTopic,
            getMessages,
            clearForum
        }}>
            {props.children}
        </ForumContext.Provider>
    )
}

export default ForumState;
