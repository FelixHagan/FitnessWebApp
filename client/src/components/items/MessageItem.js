import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ individualMessage, reportTheMessage }) => {
    const { user, date, message, _id, flag } = individualMessage;

    const [wantToReport, setWantToReport] = useState(false);

    const [updatedMessage, setUpdatedMessage] = useState({
        _id: _id,
        user: user,
        date: date,
        message: message,
        flag: flag
    })

    let year = date.split("T");

    // runs when updateMessage is changed which happens after the user confirms they 
    // want to report the message
    useEffect(() => {
        reportTheMessage(updatedMessage)
    }, [updatedMessage])

    // runs if the user confirms they want to report the message
    const handleClick = () => {
        setUpdatedMessage({
            ...updatedMessage,
            flag: true
        });
        setWantToReport(false);

    }

    return (
        <div className="messagecontainer">
            <div className="messageuser">
                <p>{user}</p>
                <p>{year[0]}</p>
            </div>
            <div className="messagebody">
                <p>{message}</p>

                {wantToReport && !updatedMessage.flag ? <div>
                    <p>Are you sure?</p> 
                    <button onClick={handleClick} style={{color: "red"}}>Yes</button> 
                    <button style={{color: "green"}} onClick={() => setWantToReport(false)}>No</button></div> :
                    <p style={{color: "red"}} onClick={() => setWantToReport(true)}>
                    {updatedMessage.flag ? "Message Reported" : "Report Message"}
                    </p>
                }
                
                
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    individualMessage: PropTypes.object.isRequired,
    reportTheMessage: PropTypes.func
}

export default MessageItem
