import React from 'react'

const MessageCard = ({ message }) => {
    return (
        <>
            <span style={{ color: message.member.clientData.color }}></span>
            <div className="message">
                <div>{message.member.clientData.username}: </div>
                <div>{message.text}</div>
            </div>
        </>
    )
}

export default MessageCard
