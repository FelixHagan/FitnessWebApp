import React, { useContext } from 'react';
import ForumContext from '../../context/forum/forumContext';

const TopicItem = ({ individualTopic }) => {
    const { user, description, date } = individualTopic;
    const forumContext = useContext(ForumContext);

    const { loading } = forumContext;

    let year;
    if (!loading){
        year = date.split("T");
    }
    

    return (
        <div className="messagecontainer">
            <div className="topicuser">
                <p>{user}</p>
                <p>{year[0]}</p>
            </div>
            <div className="messagebody">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TopicItem
