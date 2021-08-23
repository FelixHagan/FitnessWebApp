import React, { useContext, useState } from 'react';
import ForumContext from '../../context/forum/forumContext';

import Messages from './Messages';
import TopicForum from '../items/TopicForum';

const Forum = () => {
    const forumContext = useContext(ForumContext);

    const { topics } = forumContext;

    const [showAddTopicForum, setShowAddTopicForum] = useState(false);

    const showTheTopicForum = () => {
        setShowAddTopicForum(!showAddTopicForum);
    }

    return (
        <>

        <div className="outermessagecontainer">
            {topics.map((individualTopic, index) => (
                <>
                    <Messages key={individualTopic.id} individualTopic={individualTopic}/>
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
