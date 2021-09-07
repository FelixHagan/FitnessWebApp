import React, { useReducer } from 'react';
import MessageCoachContext from './messageCoachContext';
import messageCoachReducer from './messageCoachReducer';
import axios from 'axios';
import {
    GET_MESSAGE,
    CLEAR_MESSAGES,
    MESSAGE_ERROR,
    ADD_COACHMESSAGE,
    ADD_REPLY
} from '../types';

const MessageCoachState = props => {
    const initialState = {
        messages: [
            
        ],
        error: null
        
    }

    const [state, dispatch] = useReducer(messageCoachReducer, initialState);

    // get messages
    const getMessages = async () => {
        try {
            const res = await axios.get('/api/messageCoach');

            dispatch({
                type: GET_MESSAGE,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: MESSAGE_ERROR,
                payload: err.response.msg
            })
        }
    }

    // get all messages
    const getAllMessages = async () => {
        try {
            const res = await axios.get('/api/adminCoach');

            dispatch({
                type: GET_MESSAGE,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: MESSAGE_ERROR,
                payload: err.response.msg
            })
        }
    }

    // clear messages
    const clearMessages = () => {
        dispatch({
            type: CLEAR_MESSAGES
        })
    }

    // add a message 
    const addMessage = async newMessage => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/messageCoach/', newMessage, config);

            dispatch({ type: ADD_COACHMESSAGE, payload: res.data });
        } catch (err) {
            dispatch({
                type: MESSAGE_ERROR,
                payload: err.response.msg
            })
        }
        
    }

    // add a reply 
    const addReply = async reply => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/messageCoach/${reply.id}`, reply, config);

            dispatch({ type: ADD_REPLY, payload: res.data });
        } catch (err) {
            dispatch({
                type: MESSAGE_ERROR,
                payload: err.response.msg
            })
        }
        
    }



    return (
        <MessageCoachContext.Provider
        value={{
            messages: state.messages,
            error: state.error,
            addMessage,
            addReply,
            getMessages,
            getAllMessages,
            clearMessages
        }}>
            {props.children}
        </MessageCoachContext.Provider>
    )
}

export default MessageCoachState;