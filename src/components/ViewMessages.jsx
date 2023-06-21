import React from 'react'
import MessageCard from './MessageCard'

const ViewMessages = ({ messages, currentMember }) => {
    return (
        <>
            <h2>Chat App</h2>
            <div className="messages">
                {messages &&
                    messages.map((m) => (
                        <MessageCard
                            key={m.text}
                            message={m}
                            currentMember={currentMember}
                        />
                    ))}
            </div>
        </>
    )
}

export default ViewMessages
