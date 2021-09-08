import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import AdminContext from '../../context/admin/adminContext';
import ForumContext from '../../context/forum/forumContext';
import { PromiseProvider } from 'mongoose';

const AdminUser = (props) => {
    const authContext = useContext(AuthContext);
    const adminContext = useContext(AdminContext);
    const forumContext = useContext(ForumContext);

    const { loadUser, user, isAuthenticated } = authContext;
    const { loadUsers, users, removeUser } = adminContext;
    const { getMessages, topics, addMessage } = forumContext;

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
       
    }, [user])

    

    const [updateTopic, setUpdateTopic] = useState({
        id: "",
        user: "",
        description: "",
        date: "",
        messages: []
    })

    useEffect(() => {
        if (updateTopic.user !== "") {
            addMessage(updateTopic);
        }
        
    }, [updateTopic])

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

    const deleteUser = (id) => {
        removeUser(id);
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
                                    <td><button onClick={() => deleteUser(theUser._id)}>Remove User</button></td>
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
                                    <td><button onClick={() => removeMessage(theTopic, message._id)}>Remove Message</button></td>
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
