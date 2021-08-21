import React, { useState, useContext } from 'react';
import ForumContext from '../../context/forum/forumContext';


const FormItem = ({ addAMessage }) => {
    const formContext = useContext(ForumContext);

    const [newMessage, setNewMessage] = useState({
        user: "",
        message: "",
        date: new Date,
        id: Math.floor(Math.random() * 10000) +1
    })

    const { user, message, date } = newMessage;

    const onChange = e => setNewMessage({ ...newMessage, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addAMessage(newMessage);
        setNewMessage({
            user: "",
            message: "",
            date: new Date(),
            id: Math.floor(Math.random() * 10000) +1
        })
    }

    return (
        <div className="formcontainer">
        <form onSubmit={onSubmit}>
            <h2>Add Message</h2>
            
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
                <label htmlFor='message'>Message:</label>
                <textarea 
                rows='4'
                placeholder='Message'
                name='message'
                id='message'
                value={message}
                onChange={onChange}
                />
            </div>
            <input 
            type='hidden'
            name='date'
            value={new Date()}
            />
            <input type="submit" value="Add Message" className="buttoncolour"/>
        </form>
        </div>
    )
}

export default FormItem
