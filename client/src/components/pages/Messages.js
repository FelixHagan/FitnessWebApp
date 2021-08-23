import React, { useContext, useState, useEffect } from 'react';
import MessageItem from '../items/MessageItem';
import ForumContext from '../../context/forum/forumContext';
import FormItem from '../items/FormItem';
import TopicItem from '../items/TopicItem';


const Messages = ({ individualTopic }) => {
    const forumContext = useContext(ForumContext);

    const { id, user, description, date, messages  } = individualTopic;

    const [showAddMessageForm, setShowAddMessageForm] = useState(false);

    const showTheForm = () => {
        setShowAddMessageForm(!showAddMessageForm);
    }
    
    const [updateTopic, setUpdateTopic] = useState({
        id: id,
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

    return (
        <>
        <div className="forumdivider">
            <p>Topic</p>
        </div>
        <div>
            <TopicItem key= {individualTopic.id} individualTopic={individualTopic}/>
        </div>
        
        {messages.length > 0 && <div className="forumdivider">
            <p>Messages</p>
        </div>}
        
        
        <div>
            {messages.map((individualMessage, index) => (
                <MessageItem key={individualMessage.id} individualMessage={individualMessage}/>
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