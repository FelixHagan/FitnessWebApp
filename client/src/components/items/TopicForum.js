import React, { useContext, useState } from 'react';
import ForumContext from '../../context/forum/forumContext';
import AuthContext from '../../context/auth/authContext';

const TopicForum = () => {
    const forumContext = useContext(ForumContext);
    const authContext = useContext(AuthContext);

    const { user } = authContext;

    const [newTopic, setNewTopic] = useState({
        user: user.name,
        description: "",
        messages: []
    })

    const { description } = newTopic;

    const onChange = e => setNewTopic({ ...newTopic, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        forumContext.addTopic(newTopic);
        setNewTopic({
            user: user.name,
            description: "",
            messages: []
        })
    }

    return (
        <div className="formcontainer">
        <form onSubmit={onSubmit}>
            <h2>Add A New Topic</h2>
    
            <div className="labelinputcontainer">
                <label htmlFor='description'>Topic:</label>
                <textarea 
                rows='4'
                placeholder='Create a New Topic'
                name='description'
                id='description'
                value={description}
                onChange={onChange}
                />
            </div>
            
            <input type="submit" value="Add New Topic" className="buttoncolour"/>
        </form>
        </div>
    )
}

export default TopicForum
