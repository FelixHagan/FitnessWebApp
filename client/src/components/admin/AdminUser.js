import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import AdminContext from '../../context/admin/adminContext';
import ForumContext from '../../context/forum/forumContext';

const AdminUser = (props) => {
    const authContext = useContext(AuthContext);
    const adminContext = useContext(AdminContext);
    const forumContext = useContext(ForumContext);

    const { loadUser, user } = authContext;
    const { loadUsers, users, removeUser } = adminContext;
    const { getMessages, topics, addMessage } = forumContext;

    // runs on mount
    useEffect(() => {
        loadUser();
        loadUsers();
        getMessages();
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        if(user !== null) {
            if (user.userType === "1"){
                props.history.push('/');
            } else if (user.userType === "3"){
                props.history.push('/adminCoach')
            }
        }
       // eslint-disable-next-line
    }, [user])

    const [updateTopic, setUpdateTopic] = useState({
        id: "",
        user: "",
        description: "",
        date: "",
        messages: []
    })

    const [wantToDelete, setWantToDelete] = useState("");

    // runs when updateTopic is changed
    useEffect(() => {
        if (updateTopic.user !== "") {
            addMessage(updateTopic);
        }
        // eslint-disable-next-line
    }, [updateTopic])

    // updates the updateTopic
    const removeMessage = (theTopic, messageid) => {
        setUpdateTopic({
            ...updateTopic,
            id: theTopic._id,
            user: theTopic.user,
            description: theTopic.description,
            date: theTopic.date,
            messages: theTopic.messages.filter((message) => (message._id !== messageid))
        });
        
    }

    // remove the user
    const deleteUser = (id) => {
        removeUser(id);
        setWantToDelete("");
    }

    // check if the administrator wants to delete
    const checkIfDelete = (id) => {
        setWantToDelete(id);
    }
    
    
    return (
        <div className="workoutscontainer">
            <h1>The Admin Page</h1>
            

            <div className="workoutbox scrolltable">
                    <h3>Training App Users</h3>
                    <table className="resultstable">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Fitness Level</th>
                            <th>Number of Workouts Completed</th>
                            <th>Remove User</th>
                            </tr>
                        </thead>
                        <tbody id="bodyOfTable">
                            {users.length > 0 && (users.map((theUser) => (
                                <tr key={theUser._id}>
                                    <td>{theUser.name}</td>
                                    <td>{theUser.email}</td>
                                    <td>{theUser.fitnessLevel}</td>
                                    <td>{theUser.workoutsCompleted.length}</td>
                                    <td>{wantToDelete === theUser._id ? <> <p>Are You Sure?</p>
                                    <button onClick={() => deleteUser(theUser._id)}>Yes</button> 
                                    <button onClick={() => checkIfDelete("")}>No</button></> : 
                                    <button onClick={() => checkIfDelete(theUser._id)}>Remove User</button>
                                    }</td>
                                </tr>
                            ))
                            )
                                
                            }
                            
                            
                        </tbody>
                        
                    </table> 
            </div>

            <div className="workoutbox scrolltable">
                    <h3>Reported Forum Messages</h3>
                    <table className="resultstable">
                        <thead>
                            <tr>
                            <th>Name of User</th>
                            <th>Reported Message</th>
                            <th>Date of Message</th>
                            <th>Remove Reported Message</th>
                            </tr>
                        </thead>
                        <tbody id="bodyOfTable">
                            {topics.length > 0 && (topics.map((theTopic, index) => (
                                theTopic.messages.map((message) => (
                                    message.flag && <tr key={message._id}>
                                    <td>{message.user}</td>
                                    <td>{message.message}</td>
                                    <td>{message.date}</td>
                                    <td>{wantToDelete === message._id ? <> <p>Are You Sure?</p>
                                    <button onClick={() => removeMessage(theTopic, message._id)}>Yes</button> 
                                    <button onClick={() => checkIfDelete("")}>No</button></> : 
                                    <button onClick={() => checkIfDelete(message._id)}>Remove Message</button>
                                    }</td>
                                    
                                </tr> 
                                
                                ))
                            ))
                            )
                                
                            }
                            
                            
                        </tbody>
                        
                    </table>
                
                
            </div>
        </div>
    )
}

export default AdminUser;
