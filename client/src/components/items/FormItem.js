import React, { useState, useContext } from 'react';
import ForumContext from '../../context/forum/forumContext';
import AuthContext from '../../context/auth/authContext';

const FormItem = ({ addAMessage }) => {
    const formContext = useContext(ForumContext);
    const authContext = useContext(AuthContext);

    const { user } = authContext;

    const [newMessage, setNewMessage] = useState({
        user: user.name,
        message: ""
    })

    const { message } = newMessage;

    const onChange = e => setNewMessage({ ...newMessage, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addAMessage(newMessage);
        setNewMessage({
            user: user.name,
            message: ""
        })
    }

    return (
        <div className="formcontainer">
        <form onSubmit={onSubmit}>
            <h2>Add Message</h2>
    
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
