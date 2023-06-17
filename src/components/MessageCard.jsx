import React from 'react'

const MessageCard = ({ message }) => {
    return (
        <>
            {console.log(
                'MessageCard rendered, message: ' + JSON.stringify(message)
            )}
            <div>
                <span style={{ color: message.member.clientData.color }}>
                    {message.member.clientData.username}:{' '}
                </span>
                {message.text}
            </div>
        </>
    )
}

export default MessageCard
