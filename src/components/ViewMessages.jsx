import React from 'react'
import MessageCard from './MessageCard'

const ViewMessages = ({ messages }) => {
    return (
        <div className="messages">
            {messages &&
                messages.map((m) => <MessageCard key={m.text} message={m} />)}
        </div>
    )
}

export default ViewMessages
