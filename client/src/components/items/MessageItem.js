import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ individualMessage }) => {
    const { user, date, message } = individualMessage;


    return (
        <div className="messagecontainer">
            <div className="messageuser">
                <p>{user}</p>
                <p>{date.toLocaleDateString()}</p>
            </div>
            <div className="messagebody">
                <p>{message}</p>
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    individualMessage: PropTypes.object.isRequired
}

export default MessageItem
