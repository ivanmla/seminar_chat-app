import React from 'react'

const SendMessage = ({ setNewMessage }) => {
    const newMessageHandler = (event) => {
        setNewMessage({ text: event.target.value })
    }
    return (
        <>
            <input type="text" onChange={newMessageHandler}></input>
            <button>Send</button>
        </>
    )
}

export default SendMessage
