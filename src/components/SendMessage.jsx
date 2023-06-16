import React from 'react'

const SendMessage = ({ setNewMessageText, setMessageHandler }) => {
    const newMessageTextHandler = (event) => {
        setNewMessageText(event.target.value)
    }
    return (
        <>
            <input
                type="text"
                placeholder="Enter your message"
                autoFocus={true}
                onChange={newMessageTextHandler}
            ></input>
            <button onClick={setMessageHandler}>Send</button>
        </>
    )
}

export default SendMessage
