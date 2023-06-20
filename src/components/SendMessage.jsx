import React, { useState } from 'react'

const SendMessage = ({ onSendMessage }) => {
    const [newMessageText, setNewMessageText] = useState(null)

    const newMessageTextHandler = (event) => {
        setNewMessageText(event.target.value)
    }
    const setMessageHandler = (event) => {
        event.preventDefault()
        onSendMessage(newMessageText)
        setNewMessageText('')
    }
    return (
        <>
            <input
                type="text"
                placeholder="Enter your message"
                autoFocus={true}
                onChange={newMessageTextHandler}
                value={newMessageText ? newMessageText : ''}
            ></input>
            <button onClick={setMessageHandler}>Send</button>
        </>
    )
}

export default SendMessage
