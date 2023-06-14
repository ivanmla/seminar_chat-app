import React from 'react'

const SendMessage = ({ setNewMessage, setTestMessageHandler }) => {
    const newMessageHandler = (event) => {
        setNewMessage({ text: event.target.value })
    }
    return (
        <>
            <input type="text" onChange={newMessageHandler}></input>
            <button onClick={setTestMessageHandler}>Send</button>
        </>
    )
}

export default SendMessage
