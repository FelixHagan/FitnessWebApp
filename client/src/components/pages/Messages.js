import React, { useContext, useState, useEffect } from 'react';
import MessageItem from '../items/MessageItem';
import ForumContext from '../../context/forum/forumContext';
import FormItem from '../items/FormItem';
import TopicItem from '../items/TopicItem';
import PropTypes from 'prop-types';

const Messages = ({ individualTopic }) => {
    const forumContext = useContext(ForumContext);

    const { _id, user, description, date, messages  } = individualTopic;

    const [showAddMessageForm, setShowAddMessageForm] = useState(false);

    const showTheForm = () => {
        setShowAddMessageForm(!showAddMessageForm);
    }
    
    // state to hold the updated topic
    const [updateTopic, setUpdateTopic] = useState({
        id: _id,
        user: user,
        description: description,
        date: date,
        messages: messages
    }) 

    // runs when updateTopic has been changed
    useEffect(() => {
        forumContext.addMessage(updateTopic);
    }, [updateTopic])

    // updates the updateTopic by adding another message to the updateTopics messages
    const addAMessage = (newMessage) => {
        setUpdateTopic({ ...updateTopic, messages: [...messages, newMessage]});
        showTheForm();
    }

    // if the message ids match, the message will be replaced with the reported message
    // if the ids dont match the original message will be put back into state
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

Messages.propTypes = {
    individualTopic: PropTypes.object
  };

export default Messages