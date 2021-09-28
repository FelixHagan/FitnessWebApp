import React from 'react';
import PropTypes from 'prop-types';


const MessageCoachItem = ({ theMessage }) => {
    const { message, reply } = theMessage;

    return (
        <>
            {message.length > 0 && 
                <div className="messagecoach">
                    <div className="innermessage">
                        {message}
                    </div>
                </div>
            }
            
            {reply.length > 0 && 
            <div className="replycoach">
                <div className="innerreply">
                    {reply}
                </div>
                
            </div>}
            
            
        </>
    )
}

MessageCoachItem.propTypes = {
    theMessage: PropTypes.object
  };

export default MessageCoachItem;
