import React, { useState, useContext } from 'react';
import MessageCoachContext from '../../context/messageCoach/messageCoachContext';
import AuthContext from '../../context/auth/authContext';
import PropTypes from 'prop-types';

const MessageCoachForm = ({ showTheForm }) => {
    const messageCoachContext = useContext(MessageCoachContext);
    const authContext = useContext(AuthContext);

    const { user } = authContext;
    const { addMessage } = messageCoachContext;

    // state to hold the message that is typed into the form
    const [newMessage, setNewMessage] = useState({
        user: user._id,
        name: user.name,
        email: user.email,
        message: ""
    })

    const { message } = newMessage;

    const onChange = e => setNewMessage({ ...newMessage, [e.target.name]: e.target.value });

    // runs when the Add Message button is clicked
    const onSubmit = e => {
        e.preventDefault();
        addMessage(newMessage);
        showTheForm();
        setNewMessage({
            user: user._id,
            name: user.name,
            email: user.email,
            message: ""
        })
    }

    return (
        <div className="formcontainer">
        <form onSubmit={onSubmit}>
            <h2>Add Message</h2>
    
            <div className="labelinputcontainer">
                <label htmlFor='message'>Message:</label>
                <textarea 
                rows='4'
                placeholder='Message'
                name='message'
                id='message'
                value={message}
                onChange={onChange}
                required
                />
            </div>
            <input type="submit" value="Add Message" className="buttoncolour"/>
        </form>
        </div>
    )
}

MessageCoachForm.propTypes = {
    showTheForm: PropTypes.func
}

export default MessageCoachForm