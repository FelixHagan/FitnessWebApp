import React, { useContext, useState } from 'react';
import ForumContext from '../../context/forum/forumContext';

const TopicForum = () => {
    const forumContext = useContext(ForumContext);

    const [newTopic, setNewTopic] = useState({
        id: Math.floor(Math.random() * 10000) +1,
        user: "",
        description: "",
        date: new Date(),
        messages: []
    })

    const { user, description } = newTopic;

    const onChange = e => setNewTopic({ ...newTopic, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        forumContext.addTopic(newTopic);
        setNewTopic({
            user: "",
            description: "",
            date: new Date(),
            id: Math.floor(Math.random() * 10000) +1,
            messages: []
        })
    }

    return (
        <div className="formcontainer">
        <form onSubmit={onSubmit}>
            <h2>Add A New Topic</h2>
            
            <div className="labelinputcontainer">
            <label htmlFor='user'>User:</label>
            <input 
                type='text'
                placeholder='User'
                name='user'
                id='user'
                value={user}
                onChange={onChange}
                />
            </div>
    
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
            <input 
            type='hidden'
            name='date'
            value={new Date()}
            />
            <input type="submit" value="Add New Topic" className="buttoncolour"/>
        </form>
        </div>
    )
}

export default TopicForum
