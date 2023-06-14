import React from 'react'

const MessageCard = ({ message }) => {
    return (
        <>
            {console.log(
                'MessageCard rendered, message: ' + JSON.stringify(message)
            )}
            <div style={{ color: message.member.color }}>
                <span>{message.member.username}: </span>
                {message.text}
            </div>
        </>
    )
}

export default MessageCard
