import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import MessageCoachContext from '../../context/messageCoach/messageCoachContext';
import AdminContext from '../../context/admin/adminContext';
import UsersFilterItem from '../items/UsersFilterItem';

const AdminCoach = (props) => {
    const authContext = useContext(AuthContext);
    const messageCoachContext = useContext(MessageCoachContext);
    const adminContext = useContext(AdminContext);

    const { loadUser, user } = authContext;
    const { loadUsers, users, filtered } = adminContext;
    const { getAllMessages, messages, addReply, addMessage } = messageCoachContext;

    useEffect(() => {
        loadUser();
        loadUsers();
        getAllMessages();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(user !== null) {
            if (user.userType === "1"){
                props.history.push('/');
            }
        }
       
    }, [user])

    const [updateMessage, setUpdateMessage] = useState({
        id: "",
        user: "",
        name: "",
        message: "",
        reply: "",
        date: "",
        email: ""
    })

    const [showForm, setShowForm] = useState(false);

    const [addMessageForm, setAddMessageForm] = useState(false);

    const { reply } = updateMessage;

    const onChange = e => setUpdateMessage({ ...updateMessage, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addReply(updateMessage);
        setShowForm(false);
        setUpdateMessage({
            id: "",
            user: "",
            name: "",
            message: "",
            reply: "",
            date: "",
            email: ""
        })
    }

    const newMessageSubmit = (e) => {
        e.preventDefault();
        addMessage(updateMessage);
        setAddMessageForm(false);
        setUpdateMessage({
            id: "",
            user: "",
            name: "",
            message: "",
            reply: "",
            date: "",
            email: ""
        })
    }

    const handleShowForm = (message) => {
        setUpdateMessage({
            id: message._id,
            user: message.user,
            name: message.name,
            message: message.message,
            reply: message.reply,
            date: message.date,
            email: message.email
        });
        setShowForm(true);
    }

    const handleCreateMessage = (theUserId, theUserName) => {
        setUpdateMessage({
            user: theUserId,
            name: theUserName,
            email: user.email,
            message: ""
        });
        setAddMessageForm(true);
    }

    const separateDate = (date) => {
        let year = date.split("T");
        return year[0];
    }

    return (
        <div className="workoutscontainer">
            <h1>The Coach Page</h1>
            

            <div className="workoutbox scrolltable">
                    <h3>Training App Users</h3>
                    <table className="resultstable">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Fitness Level</th>
                            <th>Number of Workouts Completed</th>
                            <th>Message User</th>
                            </tr>
                        </thead>
                        <tbody id="bodyOfTable">
                            {users.length > 0 && (users.map((theUser) => (
                                
                                <tr key={theUser._id}>
                                    <td>{theUser.name}</td>
                                    <td>{theUser.email}</td>
                                    <td>{theUser.fitnessLevel}</td>
                                    <td>{theUser.workoutsCompleted.length}</td>
                                    <td><button onClick={() => handleCreateMessage(theUser._id, theUser.name)}>Message</button></td>
                                </tr>
                                 
                            ))
                            )
                                
                            }
                            
                            
                        </tbody>
                        
                    </table>
                    {addMessageForm && 
                    <div className="formcontainer alignleft">
                        <form onSubmit={newMessageSubmit}>
                            <h2>Add Reply</h2>
                                
                            <div className="labelinputcontainer">
                                <label htmlFor='reply'>Add Reply:</label>
                                <textarea 
                                rows='4'
                                placeholder='Message'
                                name='reply'
                                id='reply'
                                value={reply}
                                onChange={onChange}
                                required
                                />
                            </div>
                            <input type="submit" value="Send Message" className="buttoncolour"/>
                        </form>
                    </div>
                    }
                    {addMessageForm && <button className="workoutbutton" onClick={() => setAddMessageForm(false)}>Cancel</button>}
                     
            </div>

            <div className="workoutbox scrolltable">
                    <h3>Messages to the Coach</h3>
                    <table className="resultstable">
                        <thead>
                            <tr>
                            <th>Name of User</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Reply</th>
                            <th>Add Reply</th>
                            </tr>
                        </thead>
                        <tbody id="bodyOfTable">
                            {messages.length > 0 && (messages.map((message) => (
                                <tr key={message._id}>
                                    <td>{message.name}</td>
                                    <td>{message.message}</td>
                                    <td>{separateDate(message.date)}</td>
                                    <td>{message.reply}</td>
                                    <td><button onClick={() => handleShowForm(message)}>Add Reply</button></td>
                                </tr> 
                            ))
                            )
                                
                            }
                            
                            
                        </tbody>
                        
                    </table>
                    {showForm && 
                    <div className="formcontainer alignleft">
                        <form onSubmit={onSubmit}>
                            <h2>Add Reply</h2>
                                
                            <div className="labelinputcontainer">
                                <label htmlFor='reply'>Add Reply:</label>
                                <textarea 
                                rows='4'
                                placeholder='Message'
                                name='reply'
                                id='reply'
                                value={reply}
                                onChange={onChange}
                                required
                                />
                            </div>
                            <input type="submit" value="Reply to Message" className="buttoncolour"/>
                        </form>
                    </div>
                    }
                    {showForm && <button className="workoutbutton" onClick={() => setShowForm(false)}>Cancel</button>}
                    
            </div>

            <div className="workoutbox scrolltable">
                    <h3>Workouts Completed by Users</h3>
                    <UsersFilterItem />
                    {filtered !== null ? 
                        <table className="resultstable">
                        <thead>
                            <tr>
                            <th>Name of User</th>
                            <th>Workout Completed</th>
                            <th>Date Completed</th>
                            </tr>
                        </thead>
                        <tbody id="bodyOfTable">
                            {filtered.length > 0 && (filtered.map((theUser) => (
                                theUser.workoutsCompleted.map((workout) => (
                                    <tr key={workout._id}>
                                    <td>{theUser.name}</td>
                                    <td>{workout.name}</td>
                                    <td>{separateDate(workout.date)}</td>
                                </tr>
                                ))  
                            ))
                            )
                            }
                        </tbody>
                    </table>
                    : <table className="resultstable">
                        <thead>
                            <tr>
                            <th>Name of User</th>
                            <th>Workout Completed</th>
                            <th>Date Completed</th>
                            </tr>
                        </thead>
                        <tbody id="bodyOfTable">
                            {users.length > 0 && (users.map((theUser) => (
                                theUser.workoutsCompleted.map((workout) => (
                                    <tr key={workout._id}>
                                    <td>{theUser.name}</td>
                                    <td>{workout.name}</td>
                                    <td>{separateDate(workout.date)}</td>
                                </tr>
                                ))  
                            ))
                            )
                            }
                        </tbody>
                    </table> 
                    }
                    
            </div>
        </div>
    )
}

export default AdminCoach
