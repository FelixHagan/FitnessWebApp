import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ individualMessage, reportTheMessage }) => {
    const { user, date, message, _id, flag } = individualMessage;

    const [reportMessage, setReportMessage] = useState(flag);

    const [updatedMessage, setUpdatedMessage] = useState({
        _id: _id,
        user: user,
        date: date,
        message: message,
        flag: flag
    })

    let year = date.split("T");

    useEffect(() => {
        reportTheMessage(updatedMessage)
    }, [updatedMessage])

    const handleClick = () => {
        setUpdatedMessage({
            ...updatedMessage,
            flag: !reportMessage
        });
        setReportMessage(!reportMessage);

    }

    return (
        <div className="messagecontainer">
            <div className="messageuser">
                <p>{user}</p>
                <p>{year[0]}</p>
            </div>
            <div className="messagebody">
                <p>{message}</p>
                <p style={{color: "red"}} onClick={handleClick}>
                    {updatedMessage.flag ? "Message Reported" : "Report Message"}
                </p>
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    individualMessage: PropTypes.object.isRequired
}

export default MessageItem
