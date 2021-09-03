import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ individualMessage }) => {
    const { user, date, message } = individualMessage;

    const [reportMessage, setReportMessage] = useState(false);

    let year = date.split("T");

    const handleClick = () => {
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
                    {reportMessage ? "Message Reported" : "Report Message"}
                </p>
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    individualMessage: PropTypes.object.isRequired
}

export default MessageItem
