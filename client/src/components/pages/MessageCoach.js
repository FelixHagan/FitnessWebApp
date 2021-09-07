import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import MessageCoachContext from '../../context/messageCoach/messageCoachContext';
import MessageCoachItem from '../items/MessageCoachItem';
import MessageCoachForm from '../items/MessageCoachForm';

const MessageCoach = () => {
    const authContext = useContext(AuthContext);
    const messageCoachContext = useContext(MessageCoachContext);

    const { messages, getMessages } = messageCoachContext;

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        authContext.loadUser();
        getMessages();
        // eslint-disable-next-line
    }, [])

    const handleClick = () => {
        setShowForm(!showForm);
    }

    return (
       
        <div className="messagecoachcontainer"> 
            {messages.length > 0 && messages.map(message => (
                <MessageCoachItem key={message._id} theMessage={message} />
            ))}
            {showForm && <MessageCoachForm showTheForm={handleClick}/>}
            
            <button className="workoutbutton" onClick={handleClick}>{showForm ? 'Cancel' : 'Message Coach'}</button>
        </div>
       
    )
}

export default MessageCoach;
