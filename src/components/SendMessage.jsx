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
            <div className="input">
                <input
                    type="text"
                    placeholder="Enter your message"
                    autoFocus={true}
                    onChange={newMessageTextHandler}
                    value={newMessageText ? newMessageText : ''}
                ></input>
                <button className="sendButton" onClick={setMessageHandler}>
                    Send
                </button>
            </div>
        </>
    )
}

export default SendMessage
