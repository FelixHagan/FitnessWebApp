import React, { useContext, useState, useEffect } from 'react';
import ForumContext from '../../context/forum/forumContext';
import AuthContext from '../../context/auth/authContext';

import Messages from './Messages';
import TopicForum from '../items/TopicForum';

const Forum = () => {
    const forumContext = useContext(ForumContext);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        forumContext.getMessages();
        // eslint-disable-next-line
    }, []);

    const { topics } = forumContext;

    const [showAddTopicForum, setShowAddTopicForum] = useState(false);

    const showTheTopicForum = () => {
        setShowAddTopicForum(!showAddTopicForum);
    }

    return (
        <>

        <div className="outermessagecontainer">
            {topics.map((individualTopic) => (
                <>
                    <Messages key={individualTopic._id} individualTopic={individualTopic}/>
                    
                </>
            ))}

            {showAddTopicForum && <div className="workoutscontainer">
                <TopicForum />
            </div>}

            
            <button className="workoutbutton addtopicbutton" onClick={showTheTopicForum}>{showAddTopicForum ? 'Cancel' : 'Create new topic'}</button>
        </div>

        {/*}
        <div className="workoutscontainer">
            <FormItem />
        </div>
        <div className="outermessagecontainer">
            {messages.map(individualMessage => (
                <MessageItem key={individualMessage.id} individualMessage={individualMessage}/>
            ))}
            
            <button className="workoutbutton">Add message</button>
        </div>
            {*/}
        </>
    )
}

export default Forum
