import React from 'react'

const MessageCard = ({ message, currentMember }) => {
    const messageFromMe = message.member.id === currentMember.id
    const className = messageFromMe ? 'message-currentMember' : 'message'
    return (
        <>
            <div className={className}>
                <span style={{ color: message.member.clientData.color }}>
                    {message.member.clientData.username}:{' '}
                </span>
                <br />
                <span className="text">{message.text}</span>
            </div>
        </>
    )
}

export default MessageCard
