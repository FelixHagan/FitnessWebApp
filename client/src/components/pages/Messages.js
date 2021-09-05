import React, { useContext, useState, useEffect } from 'react';
import MessageItem from '../items/MessageItem';
import ForumContext from '../../context/forum/forumContext';
import FormItem from '../items/FormItem';
import TopicItem from '../items/TopicItem';


const Messages = ({ individualTopic }) => {
    const forumContext = useContext(ForumContext);

    const { _id, user, description, date, messages  } = individualTopic;

    const [showAddMessageForm, setShowAddMessageForm] = useState(false);

    const showTheForm = () => {
        setShowAddMessageForm(!showAddMessageForm);
    }
    
    const [updateTopic, setUpdateTopic] = useState({
        id: _id,
        user: user,
        description: description,
        date: date,
        messages: messages
    }) 

    useEffect(() => {
        forumContext.addMessage(updateTopic);
    }, [updateTopic])

    const addAMessage = (newMessage) => {
        setUpdateTopic({ ...updateTopic, messages: [...messages, newMessage]});
        
    }

    const reportTheMessage = (updatedMessage) => {
        setUpdateTopic({ ...updateTopic, messages: messages.map(message => message._id === updatedMessage._id ?
             updatedMessage : message)})
    }

    return (
        <>
        <div className="forumdivider">
            <p>Topic</p>
        </div>
        <div>
            <TopicItem individualTopic={individualTopic}/>
        </div>
        
        {messages.length > 0 && <div className="forumdivider">
            <p>Messages</p>
        </div>}
        
        
        <div>
            {messages.length > 0 && messages.map((individualMessage) => (
                <MessageItem key={individualMessage._id} individualMessage={individualMessage} reportTheMessage={reportTheMessage}/>
            ))}

            {showAddMessageForm && <div className="workoutscontainer">
            <FormItem addAMessage={addAMessage}/>
            </div>}

            <button className="workoutbutton" onClick={showTheForm}>{showAddMessageForm ? 'Cancel' : 'Reply'}</button>
        </div>

        </>
    )
}

export default Messages