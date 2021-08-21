import React from 'react';
import ForumContext from '../../context/forum/forumContext';

const TopicItem = ({ individualTopic }) => {
    const { user, description, date } = individualTopic;

    return (
        <div className="messagecontainer">
            <div className="topicuser">
                <p>{user}</p>
                <p>{date.toLocaleDateString()}</p>
            </div>
            <div className="messagebody">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TopicItem
